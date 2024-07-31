import { useEffect, useState } from "react";
import { Card, Header, Modal, Search, WrapperCard } from "../../components";
import { api } from "../../api";

function Home() {
  const [assets, setAssets] = useState<any>();
  const [filterData, setFilterData] = useState<any>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    api.get(`/assets`).then((res) => {
      const responseData = Object.entries(res.data).map((data: any) => ({
        id: data[0],
        name: data[1]?.name,
      }));
      setAssets(responseData);
      setFilterData(responseData);
    });
  }, []);

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

      <Search
        describe="Ativos"
        searchChange={(value: string) => {
          onSearch(value);
        }}
      />

      <Modal
        title="Cadastro de Ativo"
        isOpen={modalOpen}
        setIsOpen={(value: boolean) => setModalOpen(value)}
      >
        <p>modal content aqui</p>
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
