import { DoctorContainer, DoctorContent, DoctorContentImage, DoctorText, DoctorTitle, DoctorTouchable } from "./Style"

export const DoctorCard = () => {
    return (
        <DoctorContainer>
            <DoctorTouchable>
                <DoctorContentImage source={{ uri: "https://github.com/HookCreeping.png" }} />

                <DoctorContent>
                    <DoctorTitle>Dra Alessandra</DoctorTitle>

                    <DoctorText>Demartologa, Esteticista</DoctorText>
                </DoctorContent>
            </DoctorTouchable>
        </DoctorContainer>
    )
}