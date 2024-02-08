import { Block } from "../../components/Block/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { Button, IconButton } from "../../components/Buttons/style"
import { Container } from "../../components/Container/style"
import { ContentLogo, ContentSquares } from "../../components/Content/style"
import { SimpleIcon } from "../../components/IconsFormat/style"
import { SquareInput } from "../../components/Input/style"
import { BlueLink } from "../../components/LinkMedium/style"
import { Logo } from "../../components/Logo/style"
import { SomeText, SomeTextHighlight } from "../../components/Texts/style"
import { Title } from "../../components/Title/style"

export const VerifyEmail = () => {
    return (
        <Container>
            <ContentLogo>
                <IconButton>
                    <SimpleIcon
                        source={require("../../assets/icons/close.png")}
                    />

                </IconButton>

                <Logo
                    source={require("../../assets/images/logo.png")}
                />

                <Block />

            </ContentLogo>

            <Title>Verifique seu email</Title>

            <SomeText>
                Digite o código de 4 dígitos enviado para <SomeTextHighlight>username@email.com</SomeTextHighlight>
            </SomeText>

            <ContentSquares>
                <SquareInput />

                <SquareInput />

                <SquareInput />

                <SquareInput />

            </ContentSquares>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>

            </Button>

            <BlueLink>Reenviar Código</BlueLink>

        </Container>
    )
}