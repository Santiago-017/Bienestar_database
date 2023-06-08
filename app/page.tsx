"use client"

import { Box, Button, Container, CssBaseline, Grid, Paper, Stack, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>

      <Box sx={{
        backgroundImage: 'url(/images/facultad_de_enfermeria.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
        <Container component="main" maxWidth="xl">
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
          >
            <CssBaseline />

            <Grid item>
              <Paper>
                <Box component = "div" sx = {{maxWidth : "30vh"}}>

                  <Stack direction="column" spacing={2} alignItems="center">

                    <Image
                      className="border-slate pb-8"
                      src="/images/logo_unal_1.png"
                      width={150}
                      height={150}
                      alt="unal logo"
                      priority={true}
                    />

                    <Typography variant = "body1" align="center">Bienvenido a la base de datos de bienestar UNAL.</Typography>

                    <Link href="pages/ingreso">
                      <Button type="button" variant="contained" fullWidth>Ingresar</Button>
                    </Link>

                    <Link href="pages/registro">
                      <Button type="button" variant="contained" fullWidth>Registrar</Button>
                    </Link>
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
