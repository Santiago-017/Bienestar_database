import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import React from "react";
import { Grid, IconButton, Stack } from "@mui/material";
import Image from "next/image"
import MenuIcon from '@mui/icons-material/Menu';

import { TemporaryDrawer } from "./TemporaryDrawer";

type Anchor = 'left';
type BasicNavbarProperties = {
    backgroundColor: string
    pageName: string
}

export const BasicNavbar: React.FC<BasicNavbarProperties> = ({ backgroundColor, pageName }: BasicNavbarProperties) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    return (
        <>
            <Box sx={{ flexGrow: 1 }} alignItems="center">
                <AppBar position="sticky" sx={{ backgroundColor: { backgroundColor } }}>
                    <Toolbar>
                        <Container maxWidth="xl">
                            <Grid
                                container
                                justifyContent="space-between"
                                direction="row"
                                alignItems="center"
                            >
                                <Grid item >
                                    <Stack direction="row" spacing={2}>
                                        <IconButton
                                            sx={{ color: "white" }}
                                            onClick={toggleDrawer("left", true)}>
                                            <MenuIcon></MenuIcon>
                                        </IconButton>

                                        <Typography variant="h4" >{pageName}</Typography>
                                    </Stack>
                                </Grid>

                                <Grid item >
                                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>

                                        <Grid container direction="column" rowSpacing={0}>
                                            <Grid item>
                                                <Typography fontStyle="italic" variant="subtitle1">
                                                    Valeria Mora Serrano
                                                </Typography>
                                            </Grid>

                                            <Grid item>
                                                <Typography fontStyle="italic" variant="subtitle1">
                                                    Estudiante
                                                </Typography>
                                            </Grid>


                                        </Grid>

                                        <Image
                                            className="border-slate pb-8"
                                            src="/images/logo_unal_3.svg"
                                            width={68}
                                            height={68}
                                            alt="AppLogo2"
                                            priority={true}
                                        />
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Container>
                    </Toolbar>
                </AppBar>
                <TemporaryDrawer setState={setState} toggleDrawer={toggleDrawer} state={state}></TemporaryDrawer>
            </Box>
        </>
    )
}