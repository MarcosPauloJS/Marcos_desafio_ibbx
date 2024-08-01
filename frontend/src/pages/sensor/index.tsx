import { useEffect, useState } from "react";
import {
  Card,
  Header,
  Input,
  Label,
  Modal,
  WrapperCard,
  Form,
  Submit,
  ButtonCard,
} from "../../components";
import { api } from "../../api";
import { useParams } from "react-router-dom";
import { Table } from "./styled";

function Sensor() {
  const [collet, setCollet] = useState<any>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [colletDate, setColletDate] = useState<string>("");
  const [colletValue, setColletValue] = useState<string>("");
  const { assetId, sensorid } = useParams();

  useEffect(() => {
    getCollet();
  }, []);

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
        setCollet(res!.data);
      });
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
                <td>{data.date}</td>
                <td>{data.value}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default Sensor;
