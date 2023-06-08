"use client"
import BasicLayout from '@/app/layouts/BasicLayout'
import { Button, Grid, Stack, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'


import HealingIcon from '@mui/icons-material/Healing';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Salud() {
    return (
        <>
            <BasicLayout navbarColor='Teal' pageName='Salud'>


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
                            spacing={8}
                        >
                            <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>

                                <Typography variant="body1">
                                    Citas médicas
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<HealingIcon />}>

                                <Typography variant="body1">
                                    Incapacidades
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<AccountCircleIcon />}>

                                <Typography variant="body1">
                                    Mi perfil de riesgo
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

                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    CÓDIGO DE CITA
                                </Typography>
                            </Grid>

                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }} >
                                <Typography variant='body1'>
                                    DOCTOR
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                <Typography variant='body1'>
                                    DIAGNÓSTICO
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    ESPECIALIDAD
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    FECHA
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    CÉDULA DE CIUDADANÍA
                                </Typography>
                            </Grid>




                            <Grid item xs={2}>
                                código cita
                            </Grid>


                            <Grid item xs={2}>
                                cc.doctor
                            </Grid>

                            <Grid item xs={2}>
                                diagnóstico
                            </Grid>

                            <Grid item xs={2}>
                                especialidad
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                cc.estudiante
                            </Grid>

                            <Grid item xs={2}>
                                código cita
                            </Grid>


                            <Grid item xs={2}>
                                cc.doctor
                            </Grid>

                            <Grid item xs={2}>
                                diagnóstico
                            </Grid>

                            <Grid item xs={2}>
                                especialidad
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                cc.estudiante
                            </Grid>

                            <Grid item xs={2}>
                                código cita
                            </Grid>


                            <Grid item xs={2}>
                                cc.doctor
                            </Grid>

                            <Grid item xs={2}>
                                diagnóstico
                            </Grid>

                            <Grid item xs={2}>
                                especialidad
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                cc.estudiante
                            </Grid>

                            <Grid item xs={2}>
                                código cita
                            </Grid>


                            <Grid item xs={2}>
                                cc.doctor
                            </Grid>

                            <Grid item xs={2}>
                                diagnóstico
                            </Grid>

                            <Grid item xs={2}>
                                especialidad
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                cc.estudiante
                            </Grid>

                            <Grid item xs={2}>
                                código cita
                            </Grid>


                            <Grid item xs={2}>
                                cc.doctor
                            </Grid>

                            <Grid item xs={2}>
                                diagnóstico
                            </Grid>

                            <Grid item xs={2}>
                                especialidad
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                cc.estudiante
                            </Grid>

                            <Grid item xs={2}>
                                código cita
                            </Grid>


                            <Grid item xs={2}>
                                cc.doctor
                            </Grid>

                            <Grid item xs={2}>
                                diagnóstico
                            </Grid>

                            <Grid item xs={2}>
                                especialidad
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                cc.estudiante
                            </Grid>

                            <Grid item xs={2}>
                                código cita
                            </Grid>


                            <Grid item xs={2}>
                                cc.doctor
                            </Grid>

                            <Grid item xs={2}>
                                diagnóstico
                            </Grid>

                            <Grid item xs={2}>
                                especialidad
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                cc.estudiante
                            </Grid>


                            <Grid item xs={2}>
                                código cita
                            </Grid>


                            <Grid item xs={2}>
                                cc.doctor
                            </Grid>

                            <Grid item xs={2}>
                                diagnóstico
                            </Grid>

                            <Grid item xs={2}>
                                especialidad
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                cc.estudiante
                            </Grid>

                            <Grid item xs={2}>
                                código cita
                            </Grid>


                            <Grid item xs={2}>
                                cc.doctor
                            </Grid>

                            <Grid item xs={2}>
                                diagnóstico
                            </Grid>

                            <Grid item xs={2}>
                                especialidad
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                cc.estudiante
                            </Grid>

                            <Grid item xs={2}>
                                código cita
                            </Grid>


                            <Grid item xs={2}>
                                cc.doctor
                            </Grid>

                            <Grid item xs={2}>
                                diagnóstico
                            </Grid>

                            <Grid item xs={2}>
                                especialidad
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                cc.estudiante
                            </Grid>

                            <Grid item xs={2}>
                                código cita
                            </Grid>


                            <Grid item xs={2}>
                                cc.doctor
                            </Grid>

                            <Grid item xs={2}>
                                diagnóstico
                            </Grid>

                            <Grid item xs={2}>
                                especialidad
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                cc.estudiante
                            </Grid>

                            <Grid item xs={2}>
                                código cita
                            </Grid>


                            <Grid item xs={2}>
                                cc.doctor
                            </Grid>

                            <Grid item xs={2}>
                                diagnóstico
                            </Grid>

                            <Grid item xs={2}>
                                especialidad
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                cc.estudiante
                            </Grid>



                        </Grid>

                    </Grid>
                </Grid >

            </BasicLayout >
        </>
    )
}