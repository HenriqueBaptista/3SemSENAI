import { Modal } from "react-native"
import { AddAppointmentContent, BoxToLabel, FilterLevels, ModalContent, ModalLabel, ModalTitle } from "./Style"
import { Button, ButtonCancel, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style"
import { AbsListNewAppointment } from "../AbsListNewAppointment/AbsListNewAppointment"
import { useState } from "react"
import { Input, InputModal } from "../Input/Style"
import { SelectClinic } from "../SelectClinic/SelectClinic"

export const AddAppointmentModal = ({
    visible,
    navigation,
    setShowModalAddAppointment,
    ...rest
}) => {
    const [statusLevel, setStatusLevel] = useState("");
    const [showSelectClinic, setShowSelectClinic] = useState(false);

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
            <AddAppointmentContent>
                <ModalContent>
                    {/* título */}
                    <ModalTitle>Agendar consulta</ModalTitle>

                    {/* box para colocar o botão e a label */}
                    <BoxToLabel>
                        {/* label */}
                        <ModalLabel>Qual o nível da consulta</ModalLabel>

                        {/* botões de ajustar nível */}
                        <FilterLevels>
                            {/* nível rotina */}
                            <AbsListNewAppointment
                                textButton={"Rotina"}
                                clickButton={statusLevel === "rotina"}
                                onPress={() => setStatusLevel("rotina")}
                            />

                            {/* nível exame */}
                            <AbsListNewAppointment
                                textButton={"Exame"}
                                clickButton={statusLevel === "exame"}
                                onPress={() => setStatusLevel("exame")}
                            />

                            {/* nível urgência */}
                            <AbsListNewAppointment
                                textButton={"Urgência"}
                                clickButton={statusLevel === "urgencia"}
                                onPress={() => setStatusLevel("urgencia")}
                            />
                        </FilterLevels>

                        {/* label */}
                        <ModalLabel>Informe a localização desejada</ModalLabel>

                        {/* input */}
                        <InputModal
                            placeholder={"Informe a localização"}
                        />
                    </BoxToLabel>

                    {/* botão continuar */}
                    <Button
                        onPress={() => setShowSelectClinic(true)}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </Button>

                    {/* botão para cancelar */}
                    <ButtonCancel onPress={() => { setShowModalAddAppointment(false) }}>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonCancel>

                    <SelectClinic
                        visible={showSelectClinic}
                        setShowSelectClinic={setShowSelectClinic}
                    />
                </ModalContent>
            </AddAppointmentContent>
        </Modal>
    )
}