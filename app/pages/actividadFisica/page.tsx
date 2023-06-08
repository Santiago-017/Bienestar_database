"use client"
import BasicLayout from '@/app/layouts/BasicLayout'
import { Grid, Button, Typography, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

import Person2Icon from '@mui/icons-material/Person2';
import GradeIcon from '@mui/icons-material/Grade';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

export default function ActividadFisicaYDeporte() {
    return (
        <>
            <BasicLayout navbarColor='orange' pageName='Actividad Física & Deporte'>

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
                            <Button variant="contained" sx={{ color: "black", bgcolor: "orange" }} endIcon={<SearchIcon />}>

                                <Typography variant="body1">
                                    Convocatorias
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "orange" }} endIcon={<SportsBaseballIcon />}>

                                <Typography variant="body1">
                                    Torneos Internos
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "orange" }} endIcon={<GradeIcon />}>

                                <Typography variant="body1">
                                    Cursos Libres
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "orange" }} endIcon={<LightbulbIcon />}>

                                <Typography variant="body1">
                                    Programas
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "orange" }} endIcon={<Person2Icon />}>

                                <Typography variant="body1">
                                    Mis convocatorias
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
