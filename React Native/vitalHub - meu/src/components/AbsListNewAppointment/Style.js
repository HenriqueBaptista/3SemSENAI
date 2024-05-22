import styled, { css } from "styled-components";

export const ButtonTabsStyle = styled.TouchableHighlight`
    width: 100px;
    height: 40px;

    align-items: center;
    justify-content: center;

    border-radius: 5px ;

    /* se o botão estiver clicado, aplica-se o fundo azul,caso contrário, fundo transparente*/
    ${props => props.clickButton ? css`
        background-color: #60BFC5 ;
    `: css`
        background-color: transparent;
        border: 2px solid #60BFC5;
    `}
`

export const ButtonTextStyle = styled.Text`
    font-size: 14px ;
    font-family:'MontserratAlternates_600SemiBold' ;

    /* se o clickButton for true, a cor da fonte será branca, caso contrário azul */
    ${props => props.clickButton ? css`
        color: #fbfbfb
    `: css`
        color: #34898F;
    `}
`