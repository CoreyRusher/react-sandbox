import Button from '@mui/material/Button'
import ButtonColor from '@mui/material/Button';

interface Props {
    text : string;
    color?: "error" | "primary";
    onClickedEvent : () => void;
    disabled : false | true
}

export default function ButtonExample({text, color, onClickedEvent, disabled} : Props) {
    return (
        <>
            <Button disabled={disabled} variant="outlined" color={color} onClick={onClickedEvent}>{text}</Button>
        </>
    )
}