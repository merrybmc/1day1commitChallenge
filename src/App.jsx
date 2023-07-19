import User from "./components/User";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./Font/Font.css";
import { Container, Header, HeaderBox } from "./App.styled";

function App() {
  const GlobalStyle = createGlobalStyle`
  ${reset}
`;
  return (
    <>
      <GlobalStyle />

      <Container>
        <HeaderBox>
          <Header style={{ paddingBottom: "1rem" }}>
            Front-end School 7th
          </Header>
          <Header> 🍀 1Day 1Commit Challenge 🍀</Header>
        </HeaderBox>
        <User />
      </Container>
    </>
  );
}

export default App;
