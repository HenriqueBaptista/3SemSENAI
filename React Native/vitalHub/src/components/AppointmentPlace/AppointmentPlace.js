import { Modal, StyleSheet } from "react-native";
import { ButtonCancel, ButtonSecondaryTitle } from "../Button/Style";
import { Container, ContainerFlex } from "../Container/Style";
import { MapSide, PlacementBox, PlacementContainer, PlacementContent } from "./Style";
import { Label } from "../Label/Style";
import { InputGray, InputGraySmall } from "../Input/Style";
import { Subtitle, Title } from "../Title/Style";
import { ContentInputSmall } from "../../screens/PerfilPaciente/Style";
import MapView from "react-native-maps";
import { LocationAccuracy, getCurrentPositionAsync, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location";
import { useEffect, useRef, useState } from "react";
import { create } from "react-native-axios";



export const AppointmentPlace = ({
  navigation,
  visible,
  setShowPlacement,
  ...rest
}) => {
  const mapReference = useRef(null);
  const [initialPosition, setInitialPosition] = useState(null);
  const [finalPosition, setFinalPosition] = useState({
    latitude: -23.8244351,
    longitude: -45.3752645,
  });

  // capturando localização
  async function CapturarLocalização() {
    // função assíncrona para conseguir a permissão do usuário
    const { granted } = await requestForegroundPermissionsAsync()

    if (granted) {
      const currentPosition = await getCurrentPositionAsync()

      setInitialPosition(currentPosition)

      console.log(initialPosition)
    }
  }

  useEffect(() => {
    CapturarLocalização();

    // capturar localização em tempo real
    watchPositionAsync({
      accuracy: LocationAccuracy.High,
      timeInterval: 1000,
      distanceInterval: 1,
    }), async (response) => {
      await setInitialPosition(response)

      mapReference.current?.animateCamera({
        pitch: 60,
        center: response.coords
      })
    }
  }, [1000])

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
      <PlacementContent>
        <MapSide>
          <MapView style={styles.map} initialRegion={{
            latitude: -23.8244351,
            longitude: -45.3752645,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          >

          </MapView>

        </MapSide>

        <PlacementBox>
          <Title>Clínica Natureh</Title>

          <Subtitle>São Paulo, SP</Subtitle>

          <Label>Endereço</Label>

          <InputGray>Rua</InputGray>

          <ContainerFlex>
            <ContentInputSmall>
              <Label>Número</Label>

              <InputGraySmall></InputGraySmall>
            </ContentInputSmall>

            <ContentInputSmall>
              <Label>Bairro</Label>

              <InputGraySmall></InputGraySmall>
            </ContentInputSmall>
          </ContainerFlex>

          <ButtonCancel onPress={() => setShowPlacement(false)}>
            <ButtonSecondaryTitle>Voltar</ButtonSecondaryTitle>
          </ButtonCancel>
        </PlacementBox>
      </PlacementContent>
    </Modal>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  }
})