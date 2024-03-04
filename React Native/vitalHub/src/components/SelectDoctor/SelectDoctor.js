import { Modal } from "react-native"
import { SelectDoctorContainer } from "./Style"
import { Button, ButtonCancel, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style"
import { Title } from "../Title/Style"
import { DoctorCard } from "../DoctorCard/DoctorCard"
import { ListComponent } from "../List/List"
import { useState } from "react"
import { SelectDate } from "../SelectDate/SelectDate"

export default SelectDoctor = ({
    visible,
    navigation,
    setShowSelectDoctor,
    ...rest
}) => {
    const [showSelectDate, setShowSelectDate] = useState()

    const Dados = [
        { id: 0, doctorName: "Jão Sena", doctorRole: "Urologista" },
        { id: 1, doctorName: "Gus", doctorRole: "Psiquiatra" },
        { id: 2, doctorName: "Gomes Pedro Teixeira", doctorRole: "Médico" },
        { id: 3, doctorName: "Creepo", doctorRole: "Desenholorogista" }
    ]

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
            {/* container */}
            <SelectDoctorContainer>
                {/* titulo */}
                <Title>Selecionar médico</Title>

                {/* lista */}
                <ListComponent
                    data={Dados}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        // card médico
                        <DoctorCard
                            doctorName={item.doctorName}
                            doctorRole={item.doctorRole}
                        />
                    )}
                />

                {/* botão continuar */}
                <Button
                    onPress={() => setShowSelectDate(true)}>
                    <ButtonTitle>Continuar</ButtonTitle>
                </Button>

                {/* cancelar */}
                <ButtonCancel onPress={() => setShowSelectDate(false)}>
                    <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                </ButtonCancel>

                {/* modal para selecionar data */}
                <SelectDate
                    visible={showSelectDate}
                    setShowSelectDate={setShowSelectDate}
                />
            </SelectDoctorContainer>
        </Modal >
    )
}