import { Container, ContainerFlex, ContainerImage, ContainerScroll, } from "../../components/Container/Style";
import { ProfileImageLarge } from "../../components/ProfileImage/Style";
import { Title, Subtitle } from "../../components/Title/Style";
import { Button, ButtonLogout } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { InputGray, InputGraySmall, } from "../../components/Input/Style";
import { ContentInputSmall } from "./Style";
import { Label, LabelSmall } from "../../components/Label/Style";

export const PerfilPaciente = () => {

  return (
    <ContainerScroll>
      <Container>
        <ContainerImage>
          <ProfileImageLarge
            source={{ uri: "https://github.com/HookCreeping.png" }}
          />
        </ContainerImage>

        <Title>Henrique Baptista</Title>

        <Subtitle>email@email.com</Subtitle>

        <Label>Data de nascimento</Label>
        <InputGray placeholder="dd/mm/aaaa" />


        <Label>CPF</Label>
        <InputGray placeholder="879********" />


        <Label>Endereço</Label>
        <InputGray placeholder="Rua Niterói,180" />

        <ContainerFlex>
          <ContentInputSmall>
            <LabelSmall>Cep</LabelSmall>
            <InputGraySmall placeholder="09330-098" />
          </ContentInputSmall>

          <ContentInputSmall>
            <LabelSmall>Cidade</LabelSmall>
            <InputGraySmall placeholder="SCS - SP" />
          </ContentInputSmall>
        </ContainerFlex>

        <Button>
          <ButtonTitle>Salvar</ButtonTitle>
        </Button>

        <Button>
          <ButtonTitle>Editar</ButtonTitle>
        </Button>

        <ButtonLogout onPress={() => { }}>
          <ButtonTitle>Sair do app</ButtonTitle>
        </ButtonLogout>
      </Container>
    </ContainerScroll>
  );
};