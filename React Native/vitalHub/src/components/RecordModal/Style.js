import styled from "styled-components/native";

export const ImageDoctor = styled.Image`
    width: 100%;
    height: 280px;
`

export const RecordContainer = styled.ScrollView`
    width: 100%;
    height: 100%;
`

export const RecordContent = styled.View`
    width: 100%;
    background-color: "#FFF";

    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const InputBox = styled.View`
    width: 100%;

    margin: 20px 0 0 0;
    gap: 10px;
    align-items: center;
`

export const PhotoBoxNull = styled.View`
    width: 90%;
    height: 111px;

    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;

    background-color: #F5F3F3;
    border-radius: 5px;
`

export const TextPhotoBox = styled.Text`
    color: #4E4B59;
    font-size: 14px;
    font-family: 'MontserratAlternates_500Medium';
`

export const FlexibleBox = styled.View`
    width: 90%;

    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 10px;
`

export const ButtonTakePhoto = styled.TouchableOpacity`
    width: 172px;
    height: 44px;

    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;

    background-color: #49B3BA;
    border-radius: 5px;
`

export const ButtonTakePhotoText = styled(TextPhotoBox)`
    color: #FBFBFB;
    font-family: 'MontserratAlternates_700Bold';
`

export const ButtonCancelPhoto = styled.TouchableOpacity`
    width: 100px;
    height: auto;
`

export const ButtonCancelPhotoText = styled.Text`
    color: #C81D25;
    font-size: 14px;
    font-family: 'MontserratAlternates_500Medium';
`

export const Line = styled.View`
    width: 90%;

    margin-top: 20px;
    margin-bottom: 20px;

    border: 2px solid #8C8A97;
`

export const ImagePhoto = styled.Image`
  width: 100%;
  height: 100%;
`

export const PhotoBox = styled.View`
    width: 90%;
    
    height: 500px;
`