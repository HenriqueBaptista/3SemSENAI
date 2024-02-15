import styled from "styled-components";

export const ContentAccount = styled.View`
    flex-direction: row;
    margin-top: 30px;
`

export const ContentLogo = styled(ContentAccount)`
    width: 100%;
    
    padding: 20px;
    justify-content: space-between;
`

export const ContentSquares = styled(ContentLogo)``

export const ContentInput = styled(ContentAccount)`
    width: 100%;

    align-items: center;
    margin: 0;
    padding: 10px;
    gap: 20px;
`

export const Content = styled.View`
    width: 100%;
    height: 100%;

    align-items: center;
`