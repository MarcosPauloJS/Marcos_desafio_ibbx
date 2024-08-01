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
} from "../../components";
import { api } from "../../api";

function Home() {
  const [assets, setAssets] = useState<any>();
  const [filterData, setFilterData] = useState<any>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [assetName, setAssetName] = useState<string>("");
  useEffect(() => {
    getAssets();
  }, []);

  const getAssets = () => {
    api
      .get(`/assets`)
      .catch(() => {
        setAssets([]);
        setFilterData([]);
      })
      .then((res) => {
        if (!res?.data) {
          setAssets([]);
          setFilterData([]);
        }
        const responseData = Object.entries(res!.data).map((data: any) => ({
          id: data[0],
          name: data[1]?.name,
        }));
        setAssets(responseData);
        setFilterData(responseData);
      });
  };

  const onSearch = (value: string): void => {
    if (!value) {
      setFilterData(assets);
      return;
    }

    setFilterData(
      assets.filter((asset: any) => {
        const regx = new RegExp(value, "gi");
        return regx.test(asset.name) || regx.test(asset.id);
      })
    );
  };

  const handleChangeInput = (event: any) => {
    event.preventDefault();
    setAssetName(event.target.value);
  };

  const createAsset = (event: any) => {
    event.preventDefault();
    api
      .post(`/assets`, {
        name: assetName,
      })
      .then(() => {
        setModalOpen(false);
        getAssets();
      });
  };

  return (
    <>
      <Header
        page="Home"
        addBtn={{
          text: "Adicinar novo ativo",
          action: () => {
            setModalOpen(true);
          },
        }}
      ></Header>
      {assets && (
        <Search
          describe={`Ativos (${assets?.length})`}
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
              value={assetName}
              onChange={handleChangeInput}
            />
          </Label>

          <Submit onClick={createAsset}>Search</Submit>
        </Form>
      </Modal>

      {filterData && (
        <WrapperCard>
          {filterData.map((data: any) => (
            <Card name={data.name} id={data.id} key={data.id} />
          ))}
        </WrapperCard>
      )}
    </>
  );
}

export default Home;
