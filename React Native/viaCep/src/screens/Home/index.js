import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, OneLineInputs, ScrollForm } from "./style";
import { Alert } from "react-native";
import axios from "axios";

export const Home = () => {
    // states - variáveis
    const [cep, setCep] = useState();
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [uf, setUf] = useState("");

    // useEffect - funções
    useEffect(() => {
        const getViaCep = async () => {
            const url = `https://viacep.com.br/ws/${cep}/json/`

            try {
                if (cep != '') {
                    const promiseGet = await axios.get(url);

                    setLogradouro(promiseGet.data.logradouro);
                    setBairro(promiseGet.data.bairro);
                    setCidade(promiseGet.data.localidade);
                    setEstado(promiseGet.data.uf);
                    setUf(promiseGet.data.uf);
                }

            } catch (error) {
                console.error(`Erro: ${error}`);
                Alert.alert("Erro ao carregar a API");

                setLogradouro("");
                setBairro("");
                setCidade("");
                setEstado("");
                setUf("");
            }
        }

        getViaCep();
    }, [cep]);

    return (
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    editable={true}
                    textLabel={"Informe o CEP"}
                    placeholder={"CEP..."}
                    keyType={"numeric"}
                    maxLenght={9}
                    fieldValue={cep}
                    onChangeText={(tx) => setCep(tx)}
                />

                <BoxInput
                    textLabel={"Logradouro"}
                    placeholder={"Logradouro..."}
                    fieldValue={logradouro}
                />

                <BoxInput
                    textLabel={"Bairro"}
                    placeholder={"Bairro..."}
                    fieldValue={bairro}
                />

                <BoxInput
                    textLabel={"Cidade"}
                    placeholder={"Cidade..."}
                    fieldValue={cidade}
                />

                <OneLineInputs>
                    <BoxInput
                        fieldWidth={65}
                        textLabel={"Estado"}
                        placeholder={"Estado..."}
                        fieldValue={estado}
                    />

                    <BoxInput
                        fieldWidth={25}
                        textLabel={"UF"}
                        placeholder={"UF"}
                        fieldValue={uf}
                    />

                </OneLineInputs>


            </ContainerForm>
        </ScrollForm>
    )
}