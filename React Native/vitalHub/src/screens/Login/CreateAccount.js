import { ButtonTitle } from "../../components/ButtonTitle/style"
import { Button } from "../../components/Buttons/style"
import { Container } from "../../components/Container/style"
import { Input } from "../../components/Input/style"
import { BlueLink } from "../../components/LinkMedium/style"
import { Logo } from "../../components/Logo/style"
import { SomeText } from "../../components/Texts/style"
import { Title } from "../../components/Title/style"

export const CreateAccount = () => {
    return (
        <Container>
            <Logo
                source={require("../../assets/images/logo.png")}
            />

            <Title>Criar conta</Title>

            <SomeText>Insira seu endereço de e-mail e senha para realizar seu cadastro.</SomeText>

            <Input
            placeholder="E-mail"
            />

            <Input
            placeholder="Senha"
            />

            <Input
            placeholder="Confirmar Senha"
            />

            <Button>
                <ButtonTitle>Cadastrar</ButtonTitle>

            </Button>

            <BlueLink>Cancelar</BlueLink>

        </Container>
    )
}