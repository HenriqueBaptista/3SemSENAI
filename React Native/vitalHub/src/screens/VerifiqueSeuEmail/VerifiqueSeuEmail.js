
import { AntDesign } from "@expo/vector-icons";
import { Container, ContainerLogo } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Subtitle, Title } from "../../components/Title/Style";
import { ContainerBox, EmailText } from "./Style";
import { ContentLogo } from "../RecuperarSenha/Style";
import { Button, ButtonSecondary, ButtonTitle } from "../../components/Button/Style";
import { ButtonSecondaryTitle } from "../../components/ButtonTitle/Style";
import { InputCode } from "../../components/Input/Style";

export const VerifiqueSeuEmail = ({ navigation }) => {
  return (
    <Container>
      <ContainerLogo>
        <ContentLogo>
          <AntDesign
            name="arrowleft"
            size={30}
            color="#34898F"
            onPress={() => { navigation.replace("Recuperar Senha") }}
          />
        </ContentLogo>

        <Logo source={require("../../assets/logo.png")} />
      </ContainerLogo>

      <Title>Verifique seu e-mail</Title>

      <Subtitle>Digite o código de 4 dígitos enviado para <EmailText>username@email.com</EmailText> </Subtitle>

      <ContainerBox>
        <InputCode keyboardType="numeric" placeholder="0" maxLength={1} />
        <InputCode keyboardType="numeric" placeholder="0" maxLength={1} />
        <InputCode keyboardType="numeric" placeholder="0" maxLength={1} />
        <InputCode keyboardType="numeric" placeholder="0" maxLength={1} />
      </ContainerBox>

      <Button onPress={() => { navigation.replace("Redefinir Senha") }}>
        <ButtonTitle>Entrar</ButtonTitle>
      </Button>

      <ButtonSecondary>
        <ButtonSecondaryTitle>Reenviar código</ButtonSecondaryTitle>
      </ButtonSecondary>

    </Container>
  );
};