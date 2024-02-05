import styled from "styled-components";

export const HeaderContainer = styled.View`
    width: 100%;
    height: 20%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: #FECC2B;
    border-radius: 0px 0px 15px 15px;
    elevation: 5;
`;

export const HeaderContent = styled.SafeAreaView`
    margin-top: 30px;
`;

export const TextHeader = styled.Text`
    font-size: 24px;
    color: #333E33;
    font-family: 'Roboto_500Medium';
`;