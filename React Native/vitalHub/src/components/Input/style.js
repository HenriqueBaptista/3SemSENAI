import styled from "styled-components";

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#34898F"
})`
    width: 90%;
    height: 53px;

    padding: 16px;
    margin-top: 15px;

    border: 2px solid #49B4BA;
    border-radius: 5px;

    font-size: 16px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: #34898F;
`

export const SquareInput = styled(Input).attrs({
    maxLength: 1,
    keyboardType: "numeric"
})`
    width: 65px;
    height: 65px;

    margin-top: 20px;
    padding: 0;
    align-items: center;
    
    font-family: "Quicksand_600SemiBold";
    font-size: 40px;
    text-align: center;
`

export const InputBox = styled.View`
    width: 100%;

    justify-content: center;
    align-items: start;

    padding: 0px 0px 0px 25px;
`

export const InputLabel = styled.Text`
    width: 40%;

    font-family: "Quicksand_600SemiBold";
    font-size: 16px;
    color: #33303E;
`

export const GrayInput = styled(Input).attrs({
    placeholderTextColor: "#33303E",
    fontFamily: "MontserratAlternates_500Medium"
})`
    margin-top: 10px;
    margin-bottom: 20px;

    border: none;
    
    background-color: #F5F3F3;

    color: #33303E;
`


export const GrayInputSmall = styled(GrayInput)`
width: 100%;
`

export const InputBoxMini = styled(InputBox)`
    width: 40%;
`