import { Header as HeaderStyled, Title, Button } from "./styled";
import { FaPlus } from "react-icons/fa";

interface HeaderProps {
  page: string;
  addBtn?: { text: string; action: () => void };
}

function Header({ page, addBtn }: HeaderProps) {
  return (
    <HeaderStyled>
      <Title>{page}</Title>
      {addBtn && (
        <Button onClick={addBtn.action}>
          <FaPlus />
          {addBtn.text}
        </Button>
      )}
    </HeaderStyled>
  );
}

export default Header;
