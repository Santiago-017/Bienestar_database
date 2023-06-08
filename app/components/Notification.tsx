import { Alert, AlertColor, Snackbar, Typography } from '@mui/material'
import React from 'react'

type NotificationProperties = {
    open: boolean,
    message: string,
    severity: AlertColor | undefined,
    handleClose: () => void
}

export const Notification: React.FC<NotificationProperties> = ({ open, message, severity, handleClose }: NotificationProperties) => {

    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={4000}
            open={open}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={severity}>
                <Typography variant="h5">{message}</Typography>
            </Alert>
        </Snackbar>
    )
}
