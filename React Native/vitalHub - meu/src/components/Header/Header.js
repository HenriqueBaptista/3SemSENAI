import { ContainerHeader } from "../Container/Style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style";
import { MaterialIcons } from "@expo/vector-icons";

export const Header = ({
  nome,
}) => {
  return (
    <ContainerHeader>
        <BoxUser>
          <ImageUser source={{ uri: "https://github.com/HookCreeping.png" }} />
          <DataUser>
            <TextDefault>Bem vindo !</TextDefault>
            <NameUser>{nome}</NameUser>
          </DataUser>
        </BoxUser>

        {/* material icons */}
        <MaterialIcons name="notifications" size={25} color="#fbfbfb" />
    
    </ContainerHeader>
  );
};