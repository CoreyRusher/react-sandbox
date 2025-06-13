import Alert from '@mui/material/Alert';
import { ReactNode, useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

interface Props {
    children : ReactNode;
    severity : "success" | "info" | "warning" | "error";
    parentCallback : (closed : boolean) => void;
}

//const [closed, setIsClosed] = useState(true)


const AlertTest = ({children, severity, parentCallback}: Props) => {
    const handleCloseEvent = () => {
        parentCallback(closed)
    }

    return (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity={severity} action={<IconButton onClick={handleCloseEvent}><Close></Close></IconButton>}>
            {children}
        </Alert>
    )
}

export default AlertTest