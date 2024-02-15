import { Calendar } from "../../components/Calendar"
import { Container } from "../../components/Container/style"
import { HeaderIndex } from "../../components/Header"
import { ScrollArea } from "../../components/ScrollArea/style"

export const AppointmentUser = () => {
    return (
        <ScrollArea>
            <Container>
                <HeaderIndex
                image={require("../../assets/images/userHeader.png")}
                name={"Richard Kosta"}
                />

                <Calendar />

                {/* <ButtonContent>
                        <ButtonSwitch />

                        <ButtonSwitch />

                        <ButtonSwitch />
                    
                    </ButtonContent> */}

                {/* <CardContainer>
                        <CardContent />

                    </CardContainer> */}

                {/* <HelpButton /> */}

                {/* <Footer /> */}

            </Container>

        </ScrollArea>
    )
}