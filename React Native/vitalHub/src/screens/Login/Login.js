import { Container } from "../../components/Container/style";
import { Logo } from "../../components/Logo/style";
import { Title } from "../../components/Title/style";
import { Input } from "../../components/Input/style";
import { LinkAccount, LinkMedium } from "../../components/LinkMedium/style";
import { Button, ButtonGoogle } from "../../components/Buttons/style";
import { ButtonGoogle__Icon } from "../../components/IconsFormat/style";
import { ContentAccount } from "../../components/Content/style";
import { TextAccount } from "../../components/Texts/style";
import { ButtonTitle, ButtonTitleGoogle } from "../../components/ButtonTitle/style";
import { AntDesign } from '@expo/vector-icons';

export const Login = () => {
    return (
        <Container>
            <Logo
                source={require("../../assets/images/logo.png")}
            />

            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder="Usuário ou E-mail"
            />

            <Input
                placeholder="Senha"
            />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>

            </Button>

            <ButtonGoogle>
                {/* <ButtonGoogle__Icon
                    source={require("../../assets/icons/googleIcon.png")}
                /> */}

                <AntDesign name="google" size={18}  color="#34898F" />

                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>

            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? <LinkAccount>Crie uma conta agora!</LinkAccount></TextAccount>

            </ContentAccount>

        </Container>
    )
};