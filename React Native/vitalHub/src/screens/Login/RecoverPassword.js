import { Block } from "../../components/Block/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { Button, IconButton } from "../../components/Buttons/style"
import { Container } from "../../components/Container/style"
import { ContentLogo } from "../../components/Content/style"
import { SimpleIcon } from "../../components/IconsFormat/style"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo/style"
import { SomeText } from "../../components/Texts/style"
import { Title } from "../../components/Title/style"

export const RecoverPassword = () => {
    return (
        <Container>
            <ContentLogo>
                <IconButton>
                    <SimpleIcon
                        source={require("../../assets/icons/backArrow.png")}
                    />
                </IconButton>

                <Logo
                    source={require("../../assets/images/logo.png")}
                />

                <Block />

            </ContentLogo>

            <Title>Recuperar senha</Title>

            <SomeText>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</SomeText>

            <Input
            placeholder="Usuário ou Email"
            />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>

            </Button>

        </Container>
    )
}