"use client"
import BasicLayout from '@/app/layouts/BasicLayout'
import { Button, Grid, Stack, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import React from 'react'


import HealingIcon from '@mui/icons-material/Healing';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Salud() {
    return (
        <>
            <BasicLayout navbarColor='Pink' pageName='Cultura'>


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
                            <Button variant="contained" sx={{ color: "black", bgcolor: "pink" }} endIcon={<GroupIcon />}>

                                <Typography variant="body1">
                                    Curso Cultural
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "pink" }} endIcon={<GroupIcon />}>

                                <Typography variant="body1">
                                    Grupo Artistico institucional
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
                                    CÓDIGO DE CURSO
                                </Typography>
                            </Grid>

                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }} >
                                <Typography variant='body1'>
                                    NOMBRE
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                <Typography variant='body1'>
                                    CATEGORIA
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    HORARIO
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    LUGAR
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    CUPO MÁXIMO
                                </Typography>
                            </Grid>




                            <Grid item xs={2}>
                                1
                            </Grid>

                            <Grid item xs={2}>
                                Salsa y merengue
                            </Grid>
                            
                            <Grid item xs={2}>
                                Expresión corporal y dancística
                            </Grid>

                            <Grid item xs={2}>
                                Lunes y miércoles de 2:00 a 4:00 p.m
                            </Grid>

                            <Grid item xs={2}>
                                Estadio Alfonso López
                            </Grid>

                            <Grid item xs={2}>
                                30
                            </Grid>



                            <Grid item xs={2}>
                                2
                            </Grid>

                            <Grid item xs={2}>
                                Danza contemporánea
                            </Grid>
                            
                            <Grid item xs={2}>
                                Expresión corporal y dancística
                            </Grid>

                            <Grid item xs={2}>
                                Lunes y Miércoles de 4:00 a 6:00 p.m
                            </Grid>

                            <Grid item xs={2}>
                                Estadio Alfonso López
                            </Grid>

                            <Grid item xs={2}>
                                30
                            </Grid>

                            <Grid item xs={2}>
                                1
                            </Grid>

                            <Grid item xs={2}>
                                Salsa y merengue
                            </Grid>
                            
                            <Grid item xs={2}>
                                Expresión corporal y dancística
                            </Grid>

                            <Grid item xs={2}>
                                Lunes y miércoles de 2:00 a 4:00 p.m
                            </Grid>

                            <Grid item xs={2}>
                                Estadio Alfonso López
                            </Grid>

                            <Grid item xs={2}>
                                30
                            </Grid>



                            <Grid item xs={2}>
                                2
                            </Grid>

                            <Grid item xs={2}>
                                Danza contemporánea
                            </Grid>
                            
                            <Grid item xs={2}>
                                Expresión corporal y dancística
                            </Grid>

                            <Grid item xs={2}>
                                Lunes y Miércoles de 4:00 a 6:00 p.m
                            </Grid>

                            <Grid item xs={2}>
                                Estadio Alfonso López
                            </Grid>

                            <Grid item xs={2}>
                                30
                            </Grid>

                            <Grid item xs={2}>
                                1
                            </Grid>

                            <Grid item xs={2}>
                                Salsa y merengue
                            </Grid>
                            
                            <Grid item xs={2}>
                                Expresión corporal y dancística
                            </Grid>

                            <Grid item xs={2}>
                                Lunes y miércoles de 2:00 a 4:00 p.m
                            </Grid>

                            <Grid item xs={2}>
                                Estadio Alfonso López
                            </Grid>

                            <Grid item xs={2}>
                                30
                            </Grid>



                            <Grid item xs={2}>
                                2
                            </Grid>

                            <Grid item xs={2}>
                                Danza contemporánea
                            </Grid>
                            
                            <Grid item xs={2}>
                                Expresión corporal y dancística
                            </Grid>

                            <Grid item xs={2}>
                                Lunes y Miércoles de 4:00 a 6:00 p.m
                            </Grid>

                            <Grid item xs={2}>
                                Estadio Alfonso López
                            </Grid>

                            <Grid item xs={2}>
                                30
                            </Grid>

                            <Grid item xs={2}>
                                1
                            </Grid>

                            <Grid item xs={2}>
                                Salsa y merengue
                            </Grid>
                            
                            <Grid item xs={2}>
                                Expresión corporal y dancística
                            </Grid>

                            <Grid item xs={2}>
                                Lunes y miércoles de 2:00 a 4:00 p.m
                            </Grid>

                            <Grid item xs={2}>
                                Estadio Alfonso López
                            </Grid>

                            <Grid item xs={2}>
                                30
                            </Grid>



                            <Grid item xs={2}>
                                2
                            </Grid>

                            <Grid item xs={2}>
                                Danza contemporánea
                            </Grid>
                            
                            <Grid item xs={2}>
                                Expresión corporal y dancística
                            </Grid>

                            <Grid item xs={2}>
                                Lunes y Miércoles de 4:00 a 6:00 p.m
                            </Grid>

                            <Grid item xs={2}>
                                Estadio Alfonso López
                            </Grid>

                            <Grid item xs={2}>
                                30
                            </Grid>

                            <Grid item xs={2}>
                                1
                            </Grid>

                            <Grid item xs={2}>
                                Salsa y merengue
                            </Grid>
                            
                            <Grid item xs={2}>
                                Expresión corporal y dancística
                            </Grid>

                            <Grid item xs={2}>
                                Lunes y miércoles de 2:00 a 4:00 p.m
                            </Grid>

                            <Grid item xs={2}>
                                Estadio Alfonso López
                            </Grid>

                            <Grid item xs={2}>
                                30
                            </Grid>



                            <Grid item xs={2}>
                                2
                            </Grid>

                            <Grid item xs={2}>
                                Danza contemporánea
                            </Grid>
                            
                            <Grid item xs={2}>
                                Expresión corporal y dancística
                            </Grid>

                            <Grid item xs={2}>
                                Lunes y Miércoles de 4:00 a 6:00 p.m
                            </Grid>

                            <Grid item xs={2}>
                                Estadio Alfonso López
                            </Grid>

                            <Grid item xs={2}>
                                30
                            </Grid>

                            <Grid item xs={2}>
                                1
                            </Grid>

                            <Grid item xs={2}>
                                Salsa y merengue
                            </Grid>
                            
                            <Grid item xs={2}>
                                Expresión corporal y dancística
                            </Grid>

                            <Grid item xs={2}>
                                Lunes y miércoles de 2:00 a 4:00 p.m
                            </Grid>

                            <Grid item xs={2}>
                                Estadio Alfonso López
                            </Grid>

                            <Grid item xs={2}>
                                30
                            </Grid>



                            <Grid item xs={2}>
                                2
                            </Grid>

                            <Grid item xs={2}>
                                Danza contemporánea
                            </Grid>
                            
                            <Grid item xs={2}>
                                Expresión corporal y dancística
                            </Grid>

                            <Grid item xs={2}>
                                Lunes y Miércoles de 4:00 a 6:00 p.m
                            </Grid>

                            <Grid item xs={2}>
                                Estadio Alfonso López
                            </Grid>

                            <Grid item xs={2}>
                                30
                            </Grid>

                            <Grid item xs={2}>
                                1
                            </Grid>

                            <Grid item xs={2}>
                                Salsa y merengue
                            </Grid>
                            
                            <Grid item xs={2}>
                                Expresión corporal y dancística
                            </Grid>

                            <Grid item xs={2}>
                                Lunes y miércoles de 2:00 a 4:00 p.m
                            </Grid>

                            <Grid item xs={2}>
                                Estadio Alfonso López
                            </Grid>

                            <Grid item xs={2}>
                                30
                            </Grid>



                            <Grid item xs={2}>
                                2
                            </Grid>

                            <Grid item xs={2}>
                                Danza contemporánea
                            </Grid>
                            
                            <Grid item xs={2}>
                                Expresión corporal y dancística
                            </Grid>

                            <Grid item xs={2}>
                                Lunes y Miércoles de 4:00 a 6:00 p.m
                            </Grid>

                            <Grid item xs={2}>
                                Estadio Alfonso López
                            </Grid>

                            <Grid item xs={2}>
                                30
                            </Grid>

                            <Grid item xs={2}>
                                1
                            </Grid>

                            <Grid item xs={2}>
                                Salsa y merengue
                            </Grid>
                            
                            <Grid item xs={2}>
                                Expresión corporal y dancística
                            </Grid>

                            <Grid item xs={2}>
                                Lunes y miércoles de 2:00 a 4:00 p.m
                            </Grid>

                            <Grid item xs={2}>
                                Estadio Alfonso López
                            </Grid>

                            <Grid item xs={2}>
                                30
                            </Grid>



                            <Grid item xs={2}>
                                2
                            </Grid>

                            <Grid item xs={2}>
                                Danza contemporánea
                            </Grid>
                            
                            <Grid item xs={2}>
                                Expresión corporal y dancística
                            </Grid>

                            <Grid item xs={2}>
                                Lunes y Miércoles de 4:00 a 6:00 p.m
                            </Grid>

                            <Grid item xs={2}>
                                Estadio Alfonso López
                            </Grid>

                            <Grid item xs={2}>
                                30
                            </Grid>


                            

                            



                        </Grid>

                    </Grid>
                </Grid >

            </BasicLayout >
        </>
    )
}