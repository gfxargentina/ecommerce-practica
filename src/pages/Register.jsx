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
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-style: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-style: 12px;
  font-weight: 600;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREAR UNA CUENTA</Title>
        <Form>
          <Input placeholder="Nombre" />
          <Input placeholder="Apellido" />
          <Input placeholder="Nombre de Usuario" />
          <Input placeholder="email" />
          <Input placeholder="Contraseña" />
          <Input placeholder="Confirmar Contraseña" />
          <Agreement>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
            deleniti nemo. Nisi, laudantium commodi ea ad, officiis aperiam
            quisquam recusandae numquam a molestias, facilis consectetur quia
            corrupti deserunt odit maxime.
          </Agreement>
        </Form>
        <Button>Crear Cuenta</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;