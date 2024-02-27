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

`

export const ModalLabel = styled(ModalTitle)`
    color: #000;
    font-family: "Quicksand_600SemiBold";
`

export const FilterLevels = styled.View`
width: 90%;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20px;
`