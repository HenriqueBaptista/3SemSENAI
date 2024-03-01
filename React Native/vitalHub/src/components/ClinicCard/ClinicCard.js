import { useState } from "react";
import { CalendarBox } from "../CalendarBox/CalendarBox"
import { ContainerCard, ContentCard, ExtraContainer, Rate, TextCard, TitleCard } from "./Style"
import { Fontisto } from '@expo/vector-icons';

export const ClinicCard = ({
    date,
    clinic,
    address,
    rate,
}) => {
    return (
        <ExtraContainer>
            <ContainerCard>
                <ContentCard>
                    <TitleCard>{clinic}</TitleCard>

                    <TextCard>{address}</TextCard>
                </ContentCard>

                <ContentCard>
                    <Rate>
                        <Fontisto name="star" size={20} color="#F9A620" /> {rate}
                    </Rate>

                    <CalendarBox
                        date={date}
                    />
                </ContentCard>
            </ContainerCard>
        </ExtraContainer>
    )
}