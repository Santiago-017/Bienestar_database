import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'

import { Grid, IconButton, Stack, Typography } from '@mui/material';
import Link from 'next/link';


type Anchor = 'left';

type TemporaryDrawerProperties = {
  state: any,
  setState: any,
  toggleDrawer: (anchor: Anchor, open: boolean) => void | any,

}


export const TemporaryDrawer: React.FC<TemporaryDrawerProperties> = ({ state, setState, toggleDrawer }: TemporaryDrawerProperties) => {


  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: "25vh", height: "75vh" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >


      <Grid container
        alignItems="center"
        justifyContent="center"
        direction="column"
        sx={{ height: "100vh" }}
      >

        <Grid item alignItems="center">
          <Stack direction="column" spacing={5}>

            <IconButton>
              <Link href='/pages/actividadFisica'>
                <SportsBasketballIcon></SportsBasketballIcon>
                <Typography variant="body1" textAlign="center">Actividad Física y Deporte</Typography>
              </Link>
            </IconButton>

            <IconButton>
              <Link href='/pages/gestionYFomento'>
                <AttachMoneyIcon></AttachMoneyIcon>
                <Typography variant="body1" textAlign="center">Gestión & Fomento Socioeconómico</Typography>
              </Link>
            </IconButton>

            <IconButton>
              <Link href='/pages/salud'>
                <LocalHospitalIcon></LocalHospitalIcon>
                <Typography variant="body1" textAlign="center">Salud</Typography>
              </Link>
            </IconButton>

            <IconButton>
              <Link href='/pages/cultura'>
                <TheaterComedyIcon></TheaterComedyIcon>
                <Typography variant="body1" textAlign="center">Cultura</Typography>
              </Link>
            </IconButton>

          </Stack>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{ width: "100vh" }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}