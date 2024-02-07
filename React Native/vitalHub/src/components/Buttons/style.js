import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44px;

    justify-content: center;
    align-items: center;
    margin-top: 15px;
    padding: 12px 8px;
    gap: 10px;

    background-color: #496BBA;
    border: 1px solid #496BBA;
    border-radius: 5px;
`
export const ButtonGoogle = styled(Button)`
    border-radius: 5px;

    padding: 12px 50px;
    flex-direction: row;
    gap: 27px;

    background: #FAFAFA;
`