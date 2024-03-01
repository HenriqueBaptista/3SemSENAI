import styled from "styled-components";

export const AddAppointmentContent = styled.View`
    flex: 1;
    /* width: 415px; */
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.60);
`

export const ModalContent = styled.View`
    width: 100%;
    height: 518px;

    align-items: center;

    border-radius: 10px 10px 0px 0px;
    background-color: #fff;

    position: absolute;
    bottom: 0;
`

export const ModalTitle = styled.Text`
    padding-bottom: 17px;

    font-family: "MontserratAlternates_600SemiBold";
    font-size: 20px;
    color: #33303E;
`

export const BoxToLabel = styled.View`
    width: 90%;
    flex-direction: column;
`

export const ModalLabel = styled.Text`
    font-size: 14px;
    color: #000;
    font-family: "Quicksand_600SemiBold";
    padding-bottom: 10px;
`

export const FilterLevels = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20px;
`