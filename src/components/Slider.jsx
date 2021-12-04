import React from "react";
import styled from "styled-components";
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  //background-color: #db7430;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <KeyboardArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://cdn.pixabay.com/photo/2016/06/11/12/13/pink-hair-1450045_960_720.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>OFERTAS DE VERANO</Title>
            <Description>Aproveche estas Ofertas del 50%</Description>
            <Button>Comprar Ahora</Button>
          </InfoContainer>
        </Slide>
        {/* <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://i.ibb.co/H7X9Fwc/Explorer.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>OFERTAS DE VERANO</Title>
            <Description>Aproveche estas Ofertas del 50%</Description>
            <Button>Comprar Ahora</Button>
          </InfoContainer>
        </Slide> */}
      </Wrapper>
      <Arrow direction="right">
        <KeyboardArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
