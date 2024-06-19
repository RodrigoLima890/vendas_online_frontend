import {
  Container,
  TitleLogin,
  Input,
  Label,
  ContainerInputs,
  BotaoEntrar,
  Links,
} from "./loginPage";
function App() {
  return (
    <>
      <Container>
        <TitleLogin>Fazer Login</TitleLogin>
        <ContainerInputs>
          <form method="POST" action="#">
            <Label for="email">Email: </Label>
            <Input id="email" type="text" placeholder="Seu Email..." />
            <Label for="Senha">Senha:</Label>
            <Input id="Senha" type="password" placeholder="Sua Senha..." />
            <BotaoEntrar>Entrar</BotaoEntrar>
          </form>
        </ContainerInputs>
        <Links href="#">Esqueceu Senha?</Links>
        <Links href="#">Criar Conta</Links>
      </Container>
    </>
  );
}

export default App;
