import { Modal, TextComponent } from "react-native"
import { Button, ButtonCancel, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style"
import { ConfirmAppointmentContainer, ConfirmAppointmentContent, SomeText, TextContent, TextContentCapsule, TitleText } from "./Styled"
import { Subtitle, Title } from "../Title/Style"

export const ConfirmAppointment = ({
    visible,
    navigation,
    setShowConfirmAppointment,
    tipoConsulta,
    endereco,
    clinica,
    doutor,
    role,
    ...rest
}) => {
    const nomeTipoConsulta = (tC) => {
        if (tipoConsulta === "rotina") {
            return "Rotina";
        } else if (tipoConsulta === "exame") {
            return "Exame";
        } else if (tipoConsulta === "urgencia") {
            return "Urgência"
        }
    }

    return (
        // modal
        <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
            <ConfirmAppointmentContainer>
                <ConfirmAppointmentContent>
                    {/* titulo */}
                    <Title>Agendar consulta</Title>

                    {/* subtitulo */}
                    <Subtitle>Consulte os dados selecionados para a sua consulta</Subtitle>

                    {/* capsula para todas as caixas com texto */}
                    <TextContentCapsule>
                        {/* caixa com textos */}
                        <TextContent>
                            {/* titulo da caixa */}
                            <TitleText>Data da consulta</TitleText>

                            {/* texto da caixa */}
                            <SomeText>1 de Novembro de 2023</SomeText>
                        </TextContent>

                        <TextContent>
                            <TitleText>Médic@ da consulta</TitleText>

                            <SomeText>{doutor}</SomeText>

                            <SomeText>{role}</SomeText>
                        </TextContent>

                        <TextContent>
                            <TitleText>Local da consulta</TitleText>

                            <SomeText>{endereco}, {clinica}</SomeText>
                        </TextContent>

                        <TextContent>
                            <TitleText>Tipo da consulta</TitleText>

                            <SomeText>{nomeTipoConsulta(tipoConsulta)}</SomeText>
                        </TextContent>
                    </TextContentCapsule>

                    {/* confirmar */}
                    <Button onPress={() => { navigation.replace("Home Paciente") }}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </Button>

                    {/* cancelar */}
                    <ButtonCancel onPress={() => setShowConfirmAppointment(false)}>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonCancel>
                </ConfirmAppointmentContent>
            </ConfirmAppointmentContainer>
        </Modal>
    )
}