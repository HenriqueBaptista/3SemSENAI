import styled from "styled-components";

const Button = styled.TouchableOpacity`
    width: 35%;
    height: 30;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const BtnInc = styled(Button)`
    background-color: rgba(0, 255, 0, 1)
`;

export const BtnDec = styled(Button)`
    background-color: rgba(255, 0, 0, 1)
`;