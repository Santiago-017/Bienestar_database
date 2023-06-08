"use client"

import React from "react";
import { Notification } from "../components/Notification";
import { AlertColor } from "@mui/material";

//1. define context properties with a type
type NotificationContextProperties = {
    getError: (message: string) => void
    getSuccess: (message: string) => void
}

//2. create the context using the "createContext()" function and type it, just as shown below.
const NotificationContext = React.createContext<NotificationContextProperties | null>(null);

//3. create the context provider by at the end using the Provider call "<Notification.PROVIDER>"
export const NotificationProvider : React.FC <{children : JSX.Element}> = ({children}) => {

    //4. use the "useState()" hook for setting the initial state of the "Notification" properties.
    const [severity, setSeverity] = React.useState <AlertColor | undefined>(undefined);
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const handleClose = () => {setOpen(false)}

    //5. set the field "value" of the "<NotificationContext.provider/>", by setting up the properties defined in step 1.
    const getError = (message: string) => {
        setSeverity('error')
        setMessage(message)
        setOpen(true)
    }

    const getSuccess = (message: string) => {
        setSeverity('success')
        setMessage(message)
        setOpen(true)
    }

    //wrap the properties in one single constant
    const value = {
        getError,
        getSuccess
    }

    //6. Create the provider by parsing all the fields we setted up in previous steps to the components we want to render, ant the children.
    return (
        <NotificationContext.Provider value = {value}>
            <Notification handleClose={handleClose} severity={severity} open = {open} message={message}/>
            {children}
        </NotificationContext.Provider>
    )
    
    //7. wrap the root of our application with the provider such that the context is available through all the components.
}

//8. create a "useFunction()" for calling the context when we want.
export const useNotification = () => {
    const context = React.useContext(NotificationContext);
    if (!context) throw Error ('No context found')
    return context;
}