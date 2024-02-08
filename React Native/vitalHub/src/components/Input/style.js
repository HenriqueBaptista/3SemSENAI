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