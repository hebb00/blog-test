// import Link from './ActiveLink'
import { Box, Toolbar, Typography, CardMedia, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from './ActiveLink';

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#0e2a47", height: 55 }}>
      <Toolbar component="nav">
        <Typography
          variant="h6"
          component="div"
          color={'#fff'}
          sx={{ flexGrow: 1 }}
        >
          ODC
        </Typography>
        <Box sx={{ m: 1 }}>

          <NavLink href={'/'} sx={{ cursor: 'pointer' }}>
            Home
          </NavLink>

        </Box>
        <Box sx={{ m: 1 }}>
          <NavLink href='/Blog/' sx={{ cursor: 'pointer' }}>
            Blog
          </NavLink>

        </Box>
        <Box sx={{ m: 1 }}>
          <Link href='https://github.com/OpenDataforWeb3' sx={{ color: '#fff' }}>
            <GitHubIcon />
          </Link>

        </Box>
        <Box sx={{ m: 1 }}>
          <Link href='https://twitter.com/OpenDataforWeb3' color={'#fff'}>
            <TwitterIcon />
          </Link>

        </Box>

      </Toolbar>
    </Box>
  )
}

export default Header
