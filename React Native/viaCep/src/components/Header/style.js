import styled from "styled-components";

export const HeaderContainer = styled.View`
    width: 100%;
    height: 20%;

    align-items: center;
    justify-content: center;

    background-color: #FECC2B;
    border-radius: 0px 0px 15px 15px;
    elevation: 30px;

    position: absolute;
    top: 0;
`;

export const HeaderContent = styled.SafeAreaView`
    align-items: center;
    justify-content: center;
`;

export const TextHeader = styled.Text`
    font-size: 24px;
    color: #333E33;
`;