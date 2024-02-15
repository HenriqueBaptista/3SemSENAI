import styled from "styled-components";

export const CardProfile = styled.View`
    width: 289px;
    height: 100px;

    justify-content: center;
    align-items: center;
    gap: 10px;

    background-color: #FFF;
    elevation: 7;
    border-radius: 5px;

    position: absolute;
    top: 230px;
`

export const TitleCard = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 16px;
    color: #33303E;
`

export const TextCard = styled(TitleCard)`
    font-family: "Quicksand_500Medium";
    font-size: 14px;
`