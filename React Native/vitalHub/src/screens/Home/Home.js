import { StatusBar } from "react-native";
import { Container } from "../../components/Container/Style";
import { Header } from "../../components/Header/Header";
import { CalendarHome } from "../../components/CalendarHome/CalendarHome";
import { FilterAppointment } from "./Style";
import { AbsListAppointment } from "../../components/AbsListAppointment/AbsListAppointment";
import { useState } from "react";
import { ListComponent } from "../../components/List/List";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { CancellationModal } from "../../components/CancellationModal/CancellationModal";
import { AppointmentModal } from "../../components/AppointmentModal/AppointmentModal";

const Consultas = [
  { id: 1, nome: "Carlos", situacao: "pendente" },
  { id: 2, nome: "Carlos", situacao: "realizado" },
  { id: 3, nome: "Carlos", situacao: "cancelado" },
  { id: 4, nome: "Carlos", situacao: "realizado" },
  { id: 5, nome: "Carlos", situacao: "cancelado" },
];

export const Home = ({ navigation }) => {
  const [statusLista, setStatusLista] = useState("pendente");

  // State para os modais
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(false);

  return (
    <Container>
      <StatusBar />

      {/* Header */}
      <Header
        nome={"Dr. Creepo"}
      />

      {/* Calendar */}
      <CalendarHome />

      {/* Filtros (button) */}
      {/* Container */}
      <FilterAppointment>
        {/* Botão agendado */}
        <AbsListAppointment
          textButton={"Agendadas"}
          clickButton={statusLista === "pendente"}
          onPress={() => setStatusLista("pendente")}
        />

        {/* Botão realizado */}
        <AbsListAppointment
          textButton={"Realizadas"}
          clickButton={statusLista === "realizado"}
          onPress={() => setStatusLista("realizado")}
        />

        {/* Botão cancelado */}
        <AbsListAppointment
          textButton={"Canceladas"}
          clickButton={statusLista === "cancelado"}
          onPress={() => setStatusLista("cancelado")}
        />
      </FilterAppointment>

      {/* Cards */}
      {/* Lista (FlatList) */}
      <ListComponent
        data={Consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          statusLista == item.situacao && (
            <AppointmentCard
              situacao={item.situacao}
              onPressCancel={() => setShowModalCancel(true)}
              onPressAppointment={() => setShowModalAppointment(true)}
              navigation={navigation}
            />
          )
        }
      />

      <CancellationModal
        visible={showModalCancel}
        setShowModalCancel={setShowModalCancel}
      />

      <AppointmentModal
        visible={showModalAppointment}
        setShowModalAppointment={setShowModalAppointment}
      />
    </Container>
  );
};
