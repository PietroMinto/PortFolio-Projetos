import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import Gmail from "../../assets/gmail.png";
import MyProfilePhoto from "../../assets/eu.jpg";

import {
  Button,
  Container,
  Header,
  LeftContainer,
  Links,
  RightContainer,
  SocialMedia,
  SocialProfile,
  Title,
} from "./styles";

export function Home() {

  return (
    <Container>
      <Header>
        <h1>
          Bem vindo(a) ao meu <span>PortFolio</span>
        </h1>
        <Links>Home</Links>
        <Links>Projetos</Links>
        <Links>Sobre Mim</Links>
        <Links>Contato</Links>
      </Header>
      <LeftContainer>
        <Title>
          <h2>
            Olá, meu nome é <span>Pietro</span> sou um Dev FullStack
          </h2>
        </Title>
        <p>
          Tenho habilidades para fazer sites landing pages, aplicações de
          cadastro e login de usuário, e um pouco da parte do Back-End como na
          construção de alguns servidores, já produzi algumas aplicações
          responsivas também. Atualmente gosto mais de trabalhar com Front-End,
          gosto sempre de ficar criando projetos diferetes para praticar e
          melhorar cada vez mais minhas técnicas e habilidades nessa área que
          tanto gosto.
        </p>
        <SocialProfile>
          <Button href="https://w.app/19zBWZ">Contato pessoal</Button>
          <Button>Meu GitHub</Button>
          <SocialMedia>
            <a href="https://pt-br.facebook.com/login/device-based/regular/login/">
              <img src={facebook} />
            </a>
            <a href="https://www.instagram.com/pietro_f_minto/">
              <img src={instagram} />
            </a>
            <a href="https://www.linkedin.com/in/pietro-minto/">
              <img src={linkedin} />
            </a>
            <a href="https://w.app/19zBWZ">
              <img src={Gmail} />
            </a>
          </SocialMedia>
        </SocialProfile>
      </LeftContainer>
      <RightContainer>
        <img src={MyProfilePhoto} />
      </RightContainer>
    </Container>
  );
}
