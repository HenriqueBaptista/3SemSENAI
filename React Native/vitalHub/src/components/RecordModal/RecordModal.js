import { Modal } from "react-native";
import { ButtonCancel, ButtonSecondaryTitle } from "../Button/Style";
import { Container } from "../Container/Style";
import { ButtonCancelPhoto, ButtonCancelPhotoText, ButtonTakePhoto, ButtonTakePhotoText, FlexibleBox, ImageDoctor, ImagePhoto, InputBox, Line, PhotoBox, PhotoBoxNull, RecordContainer, RecordContent, TextPhotoBox } from "./Style";
import { Subtitle, Title } from "../Title/Style";
import { Label } from "../Label/Style";
import { InputGray } from "../Input/Style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import CameraModal from "../CameraModal/CameraModal";
import { useState } from "react";



export const RecordModal = ({
    navigation,
    visible,
    setShowMedicRecord,
    ...rest
}) => {
    const [showCamera, setShowCamera] = useState(false);
    const [photo, setPhoto] = useState(null);

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
            <Container>
                <RecordContainer>
                    <ImageDoctor source={{ uri: "https://cdn.vox-cdn.com/thumbor/73N9bbloH2p8vCPf25bOLQ4g-3c=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25125289/vlcsnap_2023_12_01_10h37m31s394.jpg" }} />

                    <RecordContent>
                        <Title>Dr Hutterson</Title>

                        <Subtitle>Cliníco geral  CRM-15286</Subtitle>

                        <InputBox>
                            <Label>Descrição da consulta</Label>

                            <InputGray></InputGray>
                        </InputBox>

                        <InputBox>
                            <Label>Diagnóstico do paciente</Label>

                            <InputGray></InputGray>
                        </InputBox>

                        <InputBox>
                            <Label>Prescrição médica</Label>

                            <InputGray></InputGray>
                        </InputBox>

                        <InputBox>
                            <Label>Exames médicos</Label>

                            {photo === null ?
                                <PhotoBoxNull>
                                    <FontAwesome5 name="exclamation-circle" size={24} color="#4E4B59" />

                                    <TextPhotoBox>Nenhuma foto informada</TextPhotoBox>
                                </PhotoBoxNull>
                                :
                                <PhotoBox>
                                    <ImagePhoto
                                        source={{ uri: photo }}
                                    />
                                </PhotoBox>}
                        </InputBox>

                        <FlexibleBox>
                            <ButtonTakePhoto onPress={() => setShowCamera(true)}>
                                <MaterialCommunityIcons name="camera-plus-outline" size={24} color="#FBFBFB" />

                                <ButtonTakePhotoText>Enviar</ButtonTakePhotoText>
                            </ButtonTakePhoto>

                            <ButtonCancelPhoto onPress={() => setPhoto(null)}>
                                <ButtonCancelPhotoText>Cancelar</ButtonCancelPhotoText>
                            </ButtonCancelPhoto>
                        </FlexibleBox>

                        <Line />

                        <InputGray />

                        <ButtonCancel onPress={() => setShowMedicRecord(false)}>
                            <ButtonSecondaryTitle>Voltar</ButtonSecondaryTitle>
                        </ButtonCancel>

                        <CameraModal
                            visible={showCamera}
                            setShowCamera={setShowCamera}
                            setPhotoUpload={setPhoto}
                        />
                    </RecordContent>
                </RecordContainer>
            </Container>
        </Modal>
    )
}