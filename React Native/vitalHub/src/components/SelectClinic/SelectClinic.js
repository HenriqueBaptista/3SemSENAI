import { Modal } from "react-native"
import { SelectClinicContent } from "./Style"
import { Button, ButtonCancel, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style"
import { Title } from "../Title/Style";
import { ClinicCard } from "../ClinicCard/ClinicCard";
import { ListComponent } from "../List/List";
import { useState } from "react";
import SelectDoctor from "../SelectDoctor/SelectDoctor";

export const SelectClinic = ({
    visible,
    navigation,
    setShowSelectClinic,
    ...rest
}) => {
    const [showSelectDoctor, setShowSelectDoctor] = useState(false);

    const Dados = [
        { id: 0, address: "São Paulo, SP", clinic: "Clínica Natureh", date: "Seg-Sex", rate: "4,5", },
        { id: 1, address: "São Paulo, SP", clinic: "Diamond Pró-Mulher", date: "Seg-Sex", rate: "4,8", },
        { id: 2, address: "Toboão, SP", clinic: "Clinica Villa Lobos", date: "Seg-Sab", rate: "4,2", },
        { id: 3, address: "Taboão, SP", clinic: "SP Oncologia Clínica", date: "Seg-Sab", rate: "4,2", },
    ];

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
            <SelectClinicContent>
                {/* titulo */}
                <Title>Selecionar clínica</Title>

                {/* lista de cartões */}
                <ListComponent
                    data={Dados}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ClinicCard
                            address={item.address}
                            clinic={item.clinic}
                            date={item.date}
                            rate={item.rate}
                        />
                    )}
                />

                {/* botão continuar */}
                <Button
                        onPress={() => setShowSelectDoctor(true)}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </Button>

                {/* cancelar */}
                <ButtonCancel onPress={() => setShowSelectClinic(false)}>
                    <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                </ButtonCancel>

                <SelectDoctor
                visible={showSelectDoctor}
                setShowSelectDoctor={setShowSelectDoctor}
                />
            </SelectClinicContent>
        </Modal >
    )
}