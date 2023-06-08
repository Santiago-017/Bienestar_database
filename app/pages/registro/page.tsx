"use client"

import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, FormEvent } from 'react'
import { useNotification } from '@/app/context/notification.context'
import { registerValidation } from '@/app/helpers/formValidtation'

type NewUser = {
    name: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export default function Registro() {

    const { getSuccess, getError } = useNotification();

    const [newUserData, setNewUserData] = React.useState<NewUser>(
        {
            name: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewUserData(
            {
                ...newUserData, [e.target.name]: e.target.value
            }
        );
    }

    const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        registerValidation.validate(newUserData).then(() => {
            getSuccess(JSON.stringify(newUserData))
        }).catch((error) => {
            getError(error.message)
        })
    }


    return (
        <>
            <Box sx={{
                backgroundImage: 'url(/images/facultad_de_enfermeria_2.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: '100vh',
            }}>
                <Container component="main" maxWidth="xl">

                    <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        direction="column"
                        sx={{ minHeight: "100vh" }}
                    >

                        <Grid item>
                            <Paper>
                                <Box component="form" sx={{ maxWidth: "43vh" }} onSubmit={handleSubmit}>
                                    <Stack direction="column" spacing={2}>
                                        <Typography variant="h4">Registrar Usuario</Typography>

                                        <Stack direction="row" spacing={1}>

                                            <TextField
                                                name="name"
                                                label="Nombres"
                                                type="text"
                                                fullWidth
                                                onChange={handleChange}
                                            />

                                            <TextField
                                                name="lastName"
                                                label="Apellidos"
                                                type="text"
                                                fullWidth
                                                onChange={handleChange}
                                            />
                                        </Stack>

                                        <TextField
                                            name="email"
                                            label="Correo Electrónico"
                                            type="email"
                                            placeholder='nombre@unal.edu.co'
                                            fullWidth
                                            onChange={handleChange}

                                        />

                                        <TextField
                                            name="password"
                                            label="Nueva Contraseña"
                                            type="password"
                                            fullWidth
                                            onChange={handleChange}

                                        />

                                        <TextField
                                            name="confirmPassword"
                                            label="Confirmar Contraseña"
                                            type="password"
                                            fullWidth
                                            onChange={handleChange}

                                        />

                                        <Button type="submit" fullWidth sx={{ color: "black", backgroundColor: "#4CAF50" }}>Registrar</Button>
                                    </Stack>
                                </Box>
                            </Paper>
                        </Grid>

                    </Grid>

                </Container>
            </Box>
        </>
    )
}
