import { Header } from "../../components";

function Home() {
  return (
    <>
      <Header
        page="Home"
        addBtn={{ text: "Adicinar novo ativo", action: () => {} }}
      ></Header>
    </>
  );
}

export default Home;
