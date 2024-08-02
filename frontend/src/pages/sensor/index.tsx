import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

import {
  CardHighlight,
  Dashboard,
  Table,
  CardsWrapper,
  Echarts,
} from "./styled";
import { Header, Input, Label, Modal, Form, Submit } from "../../components";
import { api } from "../../api";

function Sensor() {
  const [collet, setCollet] = useState<any>();
  const [lastCollet, setLastCollet] = useState<any>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [colletDate, setColletDate] = useState<string>("");
  const [colletValue, setColletValue] = useState<string>("");
  const { assetId, sensorid } = useParams();

  useEffect(() => {
    getCollet();
  }, []);

  const dateList = collet?.map(function (item: any) {
    return moment(item.date).toString();
  });
  const valueList = collet?.map(function (item: any) {
    return item.value;
  });

  const option = {
    color: ["#BD783C"],
    title: {
      text: "Sensor Coleta de Dados",
      left: "left",
      textStyle: {
        color: "#FFF",
      },
    },
    toolbox: {
      feature: {
        saveAsImage: {
          pixelRatio: 2,
          iconStyle: { borderColor: "#FFF" },
        },
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    dataZoom: [
      {
        type: "inside",
      },
    ],
    xAxis: {
      data: dateList,
      silent: false,
      splitLine: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: "#FFF",
        },
      },
    },
    yAxis: {
      gridLines: {
        zeroLineColor: "red",
      },
      splitArea: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: "#FFF",
        },
      },
    },
    series: [
      {
        type: "bar",
        data: valueList,
        large: true,
      },
    ],
  };

  const getCollet = () => {
    api
      .get(`/assets/${assetId}/sensors/${sensorid}`)
      .catch(() => {
        setCollet([]);
      })
      .then((res) => {
        if (!res?.data) {
          setCollet([]);
        }
        const ascendingOrder = res!.data.sort((dateA: any, dateB: any) => {
          return moment(dateA.date).diff(moment(dateB.date));
        });
        setLastCollet(ascendingOrder[ascendingOrder.length - 1]);
        setCollet(ascendingOrder);
      });
  };

  const formatDate = (date: string): string => {
    return moment(date).format("DD/MM/YYYY");
  };

  const createSensor = (event: any) => {
    event.preventDefault();
    api
      .post(`/assets/${assetId}/sensors/${sensorid}`, {
        date: colletDate,
        value: colletValue,
      })
      .then(() => {
        setModalOpen(false);
        getCollet();
      });
  };

  return (
    <>
      <Header
        page="Sensor"
        addBtn={{
          text: "Adicinar novo Sensor",
          action: () => {
            setModalOpen(true);
          },
        }}
      ></Header>

      {collet && (
        <Dashboard>
          <CardsWrapper>
            <CardHighlight>
              <span>Total de Coletas</span>
              <span>{collet?.length}</span>
            </CardHighlight>
            <CardHighlight>
              <span>Ultimo coleta - {formatDate(lastCollet?.date)}</span>
              <span>{lastCollet?.value}</span>
            </CardHighlight>
          </CardsWrapper>
          <Echarts option={option} />
        </Dashboard>
      )}

      <Modal
        title="Cadastro de Ativo"
        isOpen={modalOpen}
        setIsOpen={(value: boolean) => setModalOpen(value)}
      >
        <Form>
          <Label>
            <Input
              placeholder="Data"
              type="date"
              value={colletDate}
              onChange={(event) => {
                setColletDate(event.target.value);
              }}
            />
            <Input
              placeholder="Valor"
              type="text"
              value={colletValue}
              onChange={(event) => setColletValue(event.target.value)}
            />
          </Label>

          <Submit onClick={createSensor}>Cadastrar</Submit>
        </Form>
      </Modal>

      <Table>
        <thead>
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          {collet &&
            collet.map((data: any) => (
              <tr>
                <td>{formatDate(data.date)}</td>
                <td>{data.value}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default Sensor;
