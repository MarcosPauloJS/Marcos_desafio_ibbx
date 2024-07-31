import { Card, Header, WrapperCard } from "../../components";

function Home() {
  return (
    <>
      <Header
        page="Home"
        addBtn={{ text: "Adicinar novo ativo", action: () => {} }}
      ></Header>

      <WrapperCard>
        <Card
          name="teste"
          id="c7bc3fc7-7830-410a-a30f-32df27e7f5ce"
          collectionTotal={20}
        />
      </WrapperCard>
    </>
  );
}

export default Home;
