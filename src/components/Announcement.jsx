import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ fontSize: "12px" })}
`;

const Announcement = () => {
  return (
    <Container>
      <h2>Ofertas de la semana del 10/12 a 23/12</h2>
    </Container>
  );
};

export default Announcement;
