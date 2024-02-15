import { ButtonTitle } from "../../components/ButtonTitle/style"
import { Button, ButtonGray } from "../../components/Buttons/style"
import { Container } from "../../components/Container/style"
import { Content, ContentInput } from "../../components/Content/style"
import { CardProfile, TextCard, TitleCard } from "../../components/HoverCard/style"
import { ImageProfile } from "../../components/ImagesFormat/style"
import { GrayInput, GrayInputSmall, InputBox, InputBoxMini, InputLabel } from "../../components/Input/style"
import { ScrollArea } from "../../components/ScrollArea/style"

export const Profile = () => {
    return (
        <Container>
            <ScrollArea>
                <Content>
                    <ImageProfile
                        source={require("../../assets/images/imageProfile.png")}
                    />

                    <CardProfile>
                        <TitleCard>Richard Kosta</TitleCard>

                        <TextCard>richard.kosta@gmail.com</TextCard>

                    </CardProfile>

                    <InputBox>
                        <InputLabel>Data de nascimento</InputLabel>

                        <GrayInput
                            placeholder={"04/05/1999"}
                        />
                    </InputBox>

                    <InputBox>
                        <InputLabel>CPF</InputLabel>

                        <GrayInput
                            placeholder={"***-***-***-**"}
                        />

                    </InputBox>

                    <InputBox>
                        <InputLabel>Endereço</InputLabel>

                        <GrayInput
                            placeholder={"Rua Vicenso Silva, 987"}
                        />

                    </InputBox>

                    <ContentInput>
                        <InputBoxMini>
                            <InputLabel>CEP</InputLabel>

                            <GrayInputSmall
                                placeholder={"06548-909"}
                            />

                        </InputBoxMini>

                        <InputBoxMini>
                            <InputLabel>Cidade</InputLabel>

                            <GrayInputSmall
                                placeholder={"Moema-SP"}
                            />

                        </InputBoxMini>

                    </ContentInput>

                    <Button>
                	    <ButtonTitle>Salvar</ButtonTitle>

                    </Button>

                    <Button>
                	    <ButtonTitle>Editar</ButtonTitle>

                    </Button>

                    <ButtonGray>
                	    <ButtonTitle>Sair do app</ButtonTitle>

                    </ButtonGray>

                </Content>

            </ScrollArea>

        </Container>
    )
}