import { useNavigate } from "react-router-dom";
import { Button } from "./styled";
import { FaArrowRight } from "react-icons/fa";

interface CardProps {
  text: string;
  redirectTo: string;
}

function ButtonCard({ text, redirectTo }: CardProps) {
  let navigate = useNavigate();

  const goTo = () => {
    navigate(redirectTo);
  };

  return (
    <Button onClick={goTo}>
      {text}
      <FaArrowRight />
    </Button>
  );
}

export default ButtonCard;
