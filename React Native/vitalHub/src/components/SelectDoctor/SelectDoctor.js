import { Modal } from "react-native"
import { SelectDoctorContainer } from "./Style"
import { Button, ButtonCancel, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style"
import { Title } from "../Title/Style"
import { DoctorCard } from "../DoctorCard/DoctorCard"

export default SelectDoctor = ({
    visible,
    navigation,
    setShowSelectDoctor,
    ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
            {/* container */}
            <SelectDoctorContainer>
                {/* titulo */}
                <Title>Selecionar médico</Title>

                {/* card médico */}
                <DoctorCard />

                {/* botão continuar */}
                <Button
                    onPress={() => setShowSelectDoctor(true)}>
                    <ButtonTitle>Continuar</ButtonTitle>
                </Button>

                {/* cancelar */}
                <ButtonCancel onPress={() => setShowSelectDoctor(false)}>
                    <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                </ButtonCancel>
            </SelectDoctorContainer>
        </Modal >
    )
}