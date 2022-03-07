import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-style: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  margin: 20px 0px 0px 0px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Link = styled.a`
  display: flex;
  font-weight: 600;
  margin: 20px 20px;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>INGRESAR A SU CUENTA</Title>
        <Form>
          <Input placeholder="Nombre de usuario" />
          <Input placeholder="Contraseña" />
        </Form>
        <Button>Ingresar</Button>
        <Link>No recuerda su Contraseña?</Link>
        <Link>Crear nueva Cuenta</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
