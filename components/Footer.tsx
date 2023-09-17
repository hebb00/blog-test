import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid, Toolbar, Typography, Link } from '@mui/material';
const Footer: React.FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Toolbar
      // sx={{
      //   backgroundColor: "#212529", width: '100%', height: 200, position: 'sticky', mt: 8,
      //   bottom: 0
      // }}
      sx={{ display: 'flex', backgroundColor: "#0e2a47", alignItems: 'end', height: 200, width: '100%' }}
    >
      <Grid container direction='row' spacing={3} >
        <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
          <Typography sx={{ color: '#fff', fontSize: 22 }}>
            Open Data Community
          </Typography>

        </Grid>
        <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>

          <Typography sx={{ color: '#fff', fontSize: 22, alignContent: 'center', m: 3 }}>
            Join us on Discord:
            <Link color='#fff' sx={{ ml: 3 }} href='https://discord.gg/vaauHJSh'>
              https://discord.gg/vaauHJSh
            </Link>
          </Typography>

        </Grid>

      </Grid>
    </Toolbar >
  )
}

export default Footer

