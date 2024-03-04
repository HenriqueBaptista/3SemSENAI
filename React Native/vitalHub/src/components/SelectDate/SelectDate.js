import { Modal } from "react-native"
import { Button, ButtonCancel, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style"
import { Title } from "../Title/Style"
import { DateContainer, SelectDateContainer } from "./Style"

export const SelectDate = ({
    visible,
    navigation,
    setShowSelectDate,
    ...rest
}) => {

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
            {/* container */}
            <SelectDateContainer>
                {/* titulo */}
                <Title>Selecionar data</Title>

                {/* botão continuar */}
                <Button
                    onPress={() => setShowSelectDate(true)}>
                    <ButtonTitle>Continuar</ButtonTitle>
                </Button>

                {/* cancelar */}
                <ButtonCancel onPress={() => setShowSelectDate(false)}>
                    <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                </ButtonCancel>
            </SelectDateContainer>
        </Modal >
    )
}