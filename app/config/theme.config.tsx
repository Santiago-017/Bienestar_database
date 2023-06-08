"use client"

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import React from "react";


type ThemeProperties = {
    children: JSX.Element;
}

export enum themePalette {
    REGULAR_WHITE = "#FFFFFF",
    BLUE_1 = "#1A237E",
    GRAY_1 = "#12181B",
    LIME_1 = "#C8FA5F",
    GREEN_1 = "#4CAF50",

    TYPOGRAPHY = "'Lato'"
}

const projectTheme = createTheme({

    palette: {
        mode: "light",
        background: {
            default: themePalette.REGULAR_WHITE
        },
        primary: {
            main: themePalette.GREEN_1,
        },
    },

    typography: {
        fontFamily: themePalette.TYPOGRAPHY
    },

    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5em",
                    //background : themePalette.GREEN_1,
                }
            }
        },

        MuiPaper: {
            defaultProps: {
                style: {
                    borderRadius: "0.5 em",
                    padding: "1.2em",
                    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
                }
                
            }
        },

    }
});


export const ThemeConfiguration: React.FC<ThemeProperties> = ({ children }) => {

    return <ThemeProvider theme={projectTheme}>
        <CssBaseline />
        {children}
    </ThemeProvider>

}