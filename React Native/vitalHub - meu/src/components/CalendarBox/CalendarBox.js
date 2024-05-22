import { Area, TextCalendar } from "./Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const CalendarBox = ({
    date,
}) => {
    return (
        <Area>
            <MaterialCommunityIcons name="calendar" size={14} color="#49B3BA" />

            <TextCalendar>{date}</TextCalendar>
        </Area>
    )
}