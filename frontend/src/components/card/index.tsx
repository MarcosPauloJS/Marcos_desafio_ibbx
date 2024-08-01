import { CardContainer, CardItem, Footer } from "./styled";

interface CardProps {
  name: string;
  id: string;
  collectionTotal?: number;
  children?: string | JSX.Element | JSX.Element[];
}

function Card({ name, id, collectionTotal, children }: CardProps) {
  return (
    <CardContainer key={id}>
      <CardItem>Nome: {name}</CardItem>
      <CardItem>ID: {id}</CardItem>
      {collectionTotal !== undefined && (
        <CardItem>Coletas: {collectionTotal}</CardItem>
      )}
      {children && <Footer>{children}</Footer>}
    </CardContainer>
  );
}

export default Card;
