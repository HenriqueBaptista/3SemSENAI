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
    tipoConsulta,
    endereco,
    clinica,
    ...rest
}) => {
    const [showSelectDate, setShowSelectDate] = useState(false)

    const [doutor, setDoutor] = useState("")
    const [role, setRole] = useState("")

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
                            onPress={() => {setDoutor(item.doctorName), setRole(item.doctorRole)}}
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
                <ButtonCancel onPress={() => setShowSelectDoctor(false)}>
                    <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                </ButtonCancel>

                {/* modal para selecionar data */}
                <SelectDate
                    visible={showSelectDate}
                    setShowSelectDate={setShowSelectDate}
                    navigation={navigation}
                    tipoConsulta={tipoConsulta}
                    endereco={endereco}
                    clinica={clinica}
                    doutor={doutor}
                    role={role}
                />
            </SelectDoctorContainer>
        </Modal >
    )
}