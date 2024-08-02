import { useEffect, useState } from "react";
import {
  Card,
  Header,
  Input,
  Label,
  Modal,
  Search,
  WrapperCard,
  Form,
  Submit,
  ButtonCard,
} from "../../components";
import { api } from "../../api";
import { useParams } from "react-router-dom";

function Ativo() {
  const [sensor, setSensor] = useState<any>();
  const [filterData, setFilterData] = useState<any>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [sensorName, setSensorName] = useState<string>("");
  const { id } = useParams();

  useEffect(() => {
    getSensor();
  }, []);

  const getSensor = () => {
    api
      .get(`assets/${id}/sensors`)
      .catch(() => {
        setSensor([]);
        setFilterData([]);
      })
      .then((res) => {
        if (!res?.data) {
          setSensor([]);
          setFilterData([]);
        }
        const responseData = Object.entries(res!.data).map((data: any) => ({
          id: data[0],
          name: data[1]?.name,
          collets: data[1]?.collets,
        }));
        setSensor(responseData);
        setFilterData(responseData);
      });
  };

  const onSearch = (value: string): void => {
    if (!value) {
      setFilterData(sensor);
      return;
    }

    setFilterData(
      sensor.filter((asset: any) => {
        const regx = new RegExp(value, "gi");
        return regx.test(asset.name) || regx.test(asset.id);
      })
    );
  };

  const handleChangeInput = (event: any) => {
    event.preventDefault();
    setSensorName(event.target.value);
  };

  const createSensor = (event: any) => {
    event.preventDefault();
    api
      .post(`/assets/${id}/sensors`, {
        name: sensorName,
      })
      .then(() => {
        setModalOpen(false);
        getSensor();
      });
  };
  return (
    <>
      <Header
        page="Ativo"
        addBtn={{
          text: "Adicinar novo Sensor",
          action: () => {
            setModalOpen(true);
          },
        }}
      ></Header>
      {sensor && (
        <Search
          describe={`Sensores (${sensor?.length})`}
          searchChange={onSearch}
        />
      )}
      <Modal
        title="Cadastro de Ativo"
        isOpen={modalOpen}
        setIsOpen={(value: boolean) => setModalOpen(value)}
      >
        <Form>
          <Label>
            <Input
              placeholder="Nome"
              type="text"
              value={sensorName}
              onChange={handleChangeInput}
            />
          </Label>

          <Submit onClick={createSensor}>Cadastrar</Submit>
        </Form>
      </Modal>

      {filterData && (
        <WrapperCard>
          {filterData.map((data: any) => (
            <Card
              name={data.name}
              id={data.id}
              collectionTotal={data?.collets?.length || 0}
              key={data.id}
            >
              <ButtonCard
                text="Ver Coletas"
                redirectTo={`../sensor/${id}/${data.id}`}
              ></ButtonCard>
            </Card>
          ))}
        </WrapperCard>
      )}
    </>
  );
}

export default Ativo;
