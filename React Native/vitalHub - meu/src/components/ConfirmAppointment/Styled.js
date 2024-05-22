import styled from "styled-components/native";

export const ConfirmAppointmentContainer = styled.View`
    flex: 1;
    align-items:center ;
    justify-content: center ;
    background-color: rgba(0, 0, 0, 0.6) ;
`

export const ConfirmAppointmentContent = styled.View`
    width: 90%;
    height: 80%;

    align-items: center;
    justify-content: center;

    border-radius: 10px;
    background-color: #FFFFFF;
`

export const TextContentCapsule = styled.View`
    width: 90%;

    gap: 20px;
    margin-bottom: 30px;
`

export const TextContent = styled.View`
    gap: 5px;
`

export const TitleText = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: 16px;
    color: #33303E;
`

export const SomeText = styled(TitleText)`
    font-family: 'Quicksand_500Medium';
    color: #4E4B59;
    font-size: 14px;
`