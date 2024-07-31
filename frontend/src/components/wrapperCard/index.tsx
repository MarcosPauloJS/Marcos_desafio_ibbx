import { Wrapper } from "./styled";

function WrapperCard({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}) {
  return <Wrapper>{children}</Wrapper>;
}

export default WrapperCard;
