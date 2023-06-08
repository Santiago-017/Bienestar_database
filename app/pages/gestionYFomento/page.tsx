"use client"
import BasicLayout from '@/app/layouts/BasicLayout'
import { Button,Grid, Stack, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

import RestaurantIcon from '@mui/icons-material/Restaurant';
import PaidIcon from '@mui/icons-material/Paid';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import WorkIcon from '@mui/icons-material/Work';

export default function GestionYFomento() {
    return (
        <>
            <BasicLayout navbarColor='#E74C3C' pageName='Gestion & Fomento Socioeconómico'>

                <Grid
                    container
                    component="main"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    sx={{ width: "100%", mt: 1 }}
                    spacing={2}
                    maxHeight="xl"
                >

                    <Grid item>

                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Button variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>

                                <Typography variant="body1">
                                    Consultar convocatorias
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<RestaurantIcon />}>

                                <Typography variant="body1">
                                    Gestión alimentaria
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<PaidIcon />}>

                                <Typography variant="body1">
                                    Gestión económica
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<HomeIcon />}>

                                <Typography variant="body1">
                                    Gestión alojamiento
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<DirectionsBusIcon />}>

                                <Typography variant="body1">
                                    Gestión transporte
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<WorkIcon />}>

                                <Typography variant="body1">
                                    Gestión emprendimiento
                                </Typography>

                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item sx={{ width: "90%", mt: 1.8, mb: 2 }}>
                        <Grid
                            container
                            component="div"
                            alignItems="center"
                            justifyContent="center"
                            direction="row"
                            sx={{ width: "100%" }}
                            spacing={2}
                            border="1px solid gray"
                        >

                            <Grid item xs={1.7} sx={{ bgcolor: "lightgray" }}>
                                <Typography variant='body1'>
                                    ID CONVOCATORIA
                                </Typography>
                            </Grid>

                            <Grid item xs={1.7} sx={{ bgcolor: "lightgray" }} >
                                <Typography variant='body1'>
                                    PROGRAMA
                                </Typography>
                            </Grid>
                            <Grid item xs={1.7} sx={{ bgcolor: "lightgray" }}>
                                <Typography variant='body1'>
                                    NOMBRE
                                </Typography>
                            </Grid>
                            <Grid item xs={1.7} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    FECHA DE APERTURA
                                </Typography>
                            </Grid>
                            <Grid item xs={1.7} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    FECHA DE CIERRE
                                </Typography>
                            </Grid>
                            <Grid item xs={1.7} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    ESTADO
                                </Typography>
                            </Grid>

                            <Grid item xs={1.7} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    PERIODO
                                </Typography>
                            </Grid>



                            <Grid item xs={1.7}>
                                convidConvocatoria
                            </Grid>


                            <Grid item xs={1.7}>
                                progidPrograma
                            </Grid>

                            <Grid item xs={1.7}>
                                convNombre
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                abierta
                            </Grid>

                            <Grid item xs={1.7}>
                                2023-1
                            </Grid>

                            <Grid item xs={1.7}>
                                convidConvocatoria
                            </Grid>


                            <Grid item xs={1.7}>
                                progidPrograma
                            </Grid>

                            <Grid item xs={1.7}>
                                convNombre
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                abierta
                            </Grid>

                            <Grid item xs={1.7}>
                                2023-1
                            </Grid>

                            <Grid item xs={1.7}>
                                convidConvocatoria
                            </Grid>


                            <Grid item xs={1.7}>
                                progidPrograma
                            </Grid>

                            <Grid item xs={1.7}>
                                convNombre
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                abierta
                            </Grid>

                            <Grid item xs={1.7}>
                                2023-1
                            </Grid>


                            <Grid item xs={1.7}>
                                convidConvocatoria
                            </Grid>


                            <Grid item xs={1.7}>
                                progidPrograma
                            </Grid>

                            <Grid item xs={1.7}>
                                convNombre
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                abierta
                            </Grid>

                            <Grid item xs={1.7}>
                                2023-1
                            </Grid>

                            <Grid item xs={1.7}>
                                convidConvocatoria
                            </Grid>


                            <Grid item xs={1.7}>
                                progidPrograma
                            </Grid>

                            <Grid item xs={1.7}>
                                convNombre
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                abierta
                            </Grid>

                            <Grid item xs={1.7}>
                                2023-1
                            </Grid>

                            <Grid item xs={1.7}>
                                convidConvocatoria
                            </Grid>


                            <Grid item xs={1.7}>
                                progidPrograma
                            </Grid>

                            <Grid item xs={1.7}>
                                convNombre
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                abierta
                            </Grid>

                            <Grid item xs={1.7}>
                                2023-1
                            </Grid>

                            <Grid item xs={1.7}>
                                convidConvocatoria
                            </Grid>


                            <Grid item xs={1.7}>
                                progidPrograma
                            </Grid>

                            <Grid item xs={1.7}>
                                convNombre
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                abierta
                            </Grid>

                            <Grid item xs={1.7}>
                                2023-1
                            </Grid>

                            <Grid item xs={1.7}>
                                convidConvocatoria
                            </Grid>


                            <Grid item xs={1.7}>
                                progidPrograma
                            </Grid>

                            <Grid item xs={1.7}>
                                convNombre
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                abierta
                            </Grid>

                            <Grid item xs={1.7}>
                                2023-1
                            </Grid>

                            <Grid item xs={1.7}>
                                convidConvocatoria
                            </Grid>


                            <Grid item xs={1.7}>
                                progidPrograma
                            </Grid>

                            <Grid item xs={1.7}>
                                convNombre
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                abierta
                            </Grid>

                            <Grid item xs={1.7}>
                                2023-1
                            </Grid>

                            <Grid item xs={1.7}>
                                convidConvocatoria
                            </Grid>


                            <Grid item xs={1.7}>
                                progidPrograma
                            </Grid>

                            <Grid item xs={1.7}>
                                convNombre
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                abierta
                            </Grid>

                            <Grid item xs={1.7}>
                                2023-1
                            </Grid>

                            <Grid item xs={1.7}>
                                convidConvocatoria
                            </Grid>


                            <Grid item xs={1.7}>
                                progidPrograma
                            </Grid>

                            <Grid item xs={1.7}>
                                convNombre
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                abierta
                            </Grid>

                            <Grid item xs={1.7}>
                                2023-1
                            </Grid>

                            <Grid item xs={1.7}>
                                convidConvocatoria
                            </Grid>


                            <Grid item xs={1.7}>
                                progidPrograma
                            </Grid>

                            <Grid item xs={1.7}>
                                convNombre
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                00-00-00
                            </Grid>

                            <Grid item xs={1.7}>
                                abierta
                            </Grid>

                            <Grid item xs={1.7}>
                                2023-1
                            </Grid>



                        </Grid>

                    </Grid>
                </Grid >


            </BasicLayout>
        </>
    )
}