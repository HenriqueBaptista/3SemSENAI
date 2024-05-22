import { Modal } from "react-native";
import { Title } from "../Title/Style";
import { ButtonModal, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style";
import { ModalContent, ModalText, PatientModal } from "./Style";

// importar os recursos do expo-notifications
import * as Notifications from 'expo-notifications';

// solicita permissões de no6ificação ao iniciar o app
Notifications.requestPermissionsAsync();

// define como as notificações devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    // mostrar o alerta quando a notificação for recebida
    shouldShowAlert: true,

    // reproduz som ao receber notificação
    shouldPlaySound: true,

    // número de notificações no ícone do app
    shouldSetBadge: true,
  })
})

export const CancellationModal = ({
  visible,
  navigation,
  setShowModalCancel,
  ...rest }) => {

  // função para lidar com chamada de notificação
  const handleCallNotifications = async () => {
    // obtem o status da permissão
    const { status } = await Notifications.getPermissionsAsync();

    // verifica se o usuário concedeu permissão
    if (status !== "granted") {
      alert("Você não deixouas notificações ativas");
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "VitalHUB",
        body: "Consulta cancelada com sucesso!",
      },
      trigger: null,
    })
  }

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <Title>Cancelar consulta</Title>

          <ModalText>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no
            seu horário, deseja mesmo cancelar essa consulta?
          </ModalText>

          <ButtonModal onPress={() => handleCallNotifications()}>
            <ButtonTitle>Confirmar</ButtonTitle>
          </ButtonModal>

          <ButtonSecondary onPress={() => setShowModalCancel(false)}>
            <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
          </ButtonSecondary>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};