import { Modal } from "react-native";
import { AppointmentContent, ModalContent, ModalImage, RowTextModal, TextModal } from "./Style";
import { Title } from "../Title/Style";
import { ButtonCancel, ButtonModal, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style";
import { useState } from "react";
import { AppointmentPlace } from "../AppointmentPlace/AppointmentPlace";

export const AppointmentModal = ({
  navigation,
  visible,
  setShowModalAppointment,
  onPressAppointment,
  onPressCancel,
  typeProfile = 'paciente',
  ...rest }) => {
  const [showPlacement, setShowPlacement] = useState(false);

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
      <AppointmentContent>
        <ModalContent>
          <ModalImage source={{ uri: "https://github.com/ojuaum1.png" }} />

          <Title>João</Title>

          <RowTextModal>
            <TextModal>45 anos</TextModal>

            <TextModal>joão.oliveira@gmail.com</TextModal>
          </RowTextModal>

          <ButtonModal onPress={() => { setShowPlacement(true) }}>
            <ButtonTitle>Ver local da consulta</ButtonTitle>
          </ButtonModal>

          <ButtonCancel onPress={() => setShowModalAppointment(false)}>
            <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
          </ButtonCancel>

          {/* ver local da consulta */}
          <AppointmentPlace
            visible={showPlacement}
            setShowPlacement={setShowPlacement}
          />

        </ModalContent>
      </AppointmentContent>
    </Modal>
  );
};