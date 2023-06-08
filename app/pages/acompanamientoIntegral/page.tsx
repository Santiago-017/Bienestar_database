"use client"
import BasicLayout from '@/app/layouts/BasicLayout'
import { Button,Grid, Stack, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

export default function AcompanamientoIntegral() {
    return (
        <>
            <BasicLayout navbarColor='#80ff80' pageName='Acompañamiento Integral'>


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
                            <Button variant="contained" sx={{ color: "black", bgcolor: "#80ff80" }} endIcon={<SearchIcon />}>

                                <Typography variant="body1">
                                    Actividades
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "#80ff80" }} endIcon={<AccountTreeIcon />}>

                                <Typography variant="body1">
                                    Proyectos estudiantiles
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "#80ff80" }} endIcon={<PeopleAltIcon />}>

                                <Typography variant="body1">
                                    Asesorias
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "#80ff80" }} endIcon={<LocalActivityIcon />}>

                                <Typography variant="body1">
                                    Convocatorias
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
                                    CÓDIGO DE ACTIVIDAD
                                </Typography>
                            </Grid>

                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }} >
                                <Typography variant='body1'>
                                    NOMBRE
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                <Typography variant='body1'>
                                    TIPO
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
                                    LUGAR
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    DESCRIPCIÓN
                                </Typography>
                            </Grid>




                            <Grid item xs={2}>
                                actID
                            </Grid>

                            <Grid item xs={2}>
                                actNombre
                            </Grid>
                            
                            <Grid item xs={2}>
                                actTipo
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                actLugar
                            </Grid>

                            <Grid item xs={2}>
                                Lorem ipsum dolor sit amet...
                            </Grid>



                            <Grid item xs={2}>
                                actID
                            </Grid>

                            <Grid item xs={2}>
                                actNombre
                            </Grid>
                            
                            <Grid item xs={2}>
                                actTipo
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                actLugar
                            </Grid>

                            <Grid item xs={2}>
                                Lorem ipsum dolor sit amet...
                            </Grid>

                            <Grid item xs={2}>
                                actID
                            </Grid>

                            <Grid item xs={2}>
                                actNombre
                            </Grid>
                            
                            <Grid item xs={2}>
                                actTipo
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                actLugar
                            </Grid>

                            <Grid item xs={2}>
                                Lorem ipsum dolor sit amet...
                            </Grid>



                            <Grid item xs={2}>
                                actID
                            </Grid>

                            <Grid item xs={2}>
                                actNombre
                            </Grid>
                            
                            <Grid item xs={2}>
                                actTipo
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                actLugar
                            </Grid>

                            <Grid item xs={2}>
                                Lorem ipsum dolor sit amet...
                            </Grid>

                            <Grid item xs={2}>
                                actID
                            </Grid>

                            <Grid item xs={2}>
                                actNombre
                            </Grid>
                            
                            <Grid item xs={2}>
                                actTipo
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                actLugar
                            </Grid>

                            <Grid item xs={2}>
                                Lorem ipsum dolor sit amet...
                            </Grid>



                            <Grid item xs={2}>
                                actID
                            </Grid>

                            <Grid item xs={2}>
                                actNombre
                            </Grid>
                            
                            <Grid item xs={2}>
                                actTipo
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                actLugar
                            </Grid>

                            <Grid item xs={2}>
                                Lorem ipsum dolor sit amet...
                            </Grid>

                            <Grid item xs={2}>
                                actID
                            </Grid>

                            <Grid item xs={2}>
                                actNombre
                            </Grid>
                            
                            <Grid item xs={2}>
                                actTipo
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                actLugar
                            </Grid>

                            <Grid item xs={2}>
                                Lorem ipsum dolor sit amet...
                            </Grid>



                            <Grid item xs={2}>
                                actID
                            </Grid>

                            <Grid item xs={2}>
                                actNombre
                            </Grid>
                            
                            <Grid item xs={2}>
                                actTipo
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                actLugar
                            </Grid>

                            <Grid item xs={2}>
                                Lorem ipsum dolor sit amet...
                            </Grid>

                            <Grid item xs={2}>
                                actID
                            </Grid>

                            <Grid item xs={2}>
                                actNombre
                            </Grid>
                            
                            <Grid item xs={2}>
                                actTipo
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                actLugar
                            </Grid>

                            <Grid item xs={2}>
                                Lorem ipsum dolor sit amet...
                            </Grid>



                            <Grid item xs={2}>
                                actID
                            </Grid>

                            <Grid item xs={2}>
                                actNombre
                            </Grid>
                            
                            <Grid item xs={2}>
                                actTipo
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                actLugar
                            </Grid>

                            <Grid item xs={2}>
                                Lorem ipsum dolor sit amet...
                            </Grid>

                            <Grid item xs={2}>
                                actID
                            </Grid>

                            <Grid item xs={2}>
                                actNombre
                            </Grid>
                            
                            <Grid item xs={2}>
                                actTipo
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                actLugar
                            </Grid>

                            <Grid item xs={2}>
                                Lorem ipsum dolor sit amet...
                            </Grid>



                            <Grid item xs={2}>
                                actID
                            </Grid>

                            <Grid item xs={2}>
                                actNombre
                            </Grid>
                            
                            <Grid item xs={2}>
                                actTipo
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                actLugar
                            </Grid>

                            <Grid item xs={2}>
                                Lorem ipsum dolor sit amet...
                            </Grid>

                            <Grid item xs={2}>
                                actID
                            </Grid>

                            <Grid item xs={2}>
                                actNombre
                            </Grid>
                            
                            <Grid item xs={2}>
                                actTipo
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                actLugar
                            </Grid>

                            <Grid item xs={2}>
                                Lorem ipsum dolor sit amet...
                            </Grid>



                            <Grid item xs={2}>
                                actID
                            </Grid>

                            <Grid item xs={2}>
                                actNombre
                            </Grid>
                            
                            <Grid item xs={2}>
                                actTipo
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                actLugar
                            </Grid>

                            <Grid item xs={2}>
                                Lorem ipsum dolor sit amet...
                            </Grid>

                            <Grid item xs={2}>
                                actID
                            </Grid>

                            <Grid item xs={2}>
                                actNombre
                            </Grid>
                            
                            <Grid item xs={2}>
                                actTipo
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                actLugar
                            </Grid>

                            <Grid item xs={2}>
                                Lorem ipsum dolor sit amet...
                            </Grid>



                            <Grid item xs={2}>
                                actID
                            </Grid>

                            <Grid item xs={2}>
                                actNombre
                            </Grid>
                            
                            <Grid item xs={2}>
                                actTipo
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                actLugar
                            </Grid>

                            <Grid item xs={2}>
                                Lorem ipsum dolor sit amet...
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid >

            </BasicLayout >
        </>
    )
}