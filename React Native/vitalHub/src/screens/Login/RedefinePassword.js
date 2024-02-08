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

export const RedefinePassword = () => {
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

            <Title>Redefinir senha</Title>

            <SomeText>Insira e confirme a sua nova senha</SomeText>

            <Input
                placeholder="Nova senha"
            />

            <Input
                placeholder="Confirmar senha"
            />

            <Button>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>

            </Button>

        </Container>
    )
}