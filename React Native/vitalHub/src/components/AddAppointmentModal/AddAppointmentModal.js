import { Modal } from "react-native"
import { AddAppointmentContent, FilterLevels, ModalContent, ModalLabel } from "./Style"
import { Button, ButtonCancel, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style"
import { AbsListNewAppointment } from "../AbsListNewAppointment/AbsListNewAppointment"
import { useState } from "react"

export const AddAppointmentModal = ({
    visible,
    navigation,
    setShowModalAddAppointment,
    ...rest
}) => {
    const [statusLevel, setStatusLevel] = useState("");

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
            <AddAppointmentContent>
                <ModalContent>
                    <ModalLabel>Qual o nível da consulta</ModalLabel>

                    {/* botões de ajustar nível */}
                    <FilterLevels>
                        <AbsListNewAppointment
                            textButton={"Rotina"}
                            clickButton={statusLevel === "rotina"}
                            onPress={() => setStatusLevel("rotina")}
                        />

                        <AbsListNewAppointment
                            textButton={"Exame"}
                            clickButton={statusLevel === "exame"}
                            onPress={() => setStatusLevel("exame")}
                        />

                        <AbsListNewAppointment
                            textButton={"Urgência"}
                            clickButton={statusLevel === "urgencia"}
                            onPress={() => setStatusLevel("urgencia")}
                        />
                    </FilterLevels>

                    {/* botão continuar */}
                    <Button>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </Button>

                    {/* botão para cancelar */}
                    <ButtonCancel onPress={() => { setShowModalAddAppointment(false) }}>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonCancel>
                </ModalContent>
            </AddAppointmentContent>
        </Modal>
    )
}