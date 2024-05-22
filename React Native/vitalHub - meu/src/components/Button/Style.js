import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90% ;
    height: 44px ;

    background-color: #496bba ;
    border-radius: 5px ;
    border: 1px solid #496bba ;

    margin-top: 15px ;
    padding: 12px 8px 12px 8px ;
    margin-bottom: 20px;

    align-items: center ;
    justify-content:center ;
`

export const ButtonGoogle = styled(Button)`
    background-color: #FAFAFA ;
    flex-direction: row ;
    gap: 10px;
`
export const ButtonSecondary = styled(Button)`
    background-color: transparent;
    border: none;
`
export const ButtonTitle = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: "MontserratAlternates_700Bold";
`;

export const ButtonSecondaryTitle = styled(ButtonTitle)`
text-transform: capitalize;
text-decoration: underline;
color: #344f8f;
`

export const ButtonModal = styled(Button)`
    width: 80% ;
`

export const ButtonCancel = styled.TouchableOpacity`
  width: 148px;
  height: 44px;

  margin-top: 10px;
  align-self: center;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-family: "MontserratAlternates_500Medium";
`;

export const NewAppointmentButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;

  justify-content: center;
  align-items: center;

  background-color: #49B3BA;
  elevation: 3;

  position: fixed;
  bottom: 60px;
  right: -35%;
  border-radius: 7px;
`

export const ButtonLogout = styled(Button)`
  width: 50%;

  border: #ACABB7;
  background-color: #ACABB7;
`