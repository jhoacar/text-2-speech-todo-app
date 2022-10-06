import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';
import { ThemeContext } from '../../contexts/theme';
import { removeToken } from '../../utils/handleToken';

import styles from './index.module.css';

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
  const [isDarkTheme, setIsDarkTheme] = useContext(ThemeContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
    removeToken();
  };

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link className={styles['nav-link']} to="/">
              To-Do App
            </Link>
          </Typography>
          <Button
            sx={{
              color: 'white',
            }}
            onClick={handleChangeTheme}
          >
            {
              isDarkTheme
              && <LightModeIcon />
            }
            {
              !isDarkTheme
              && <DarkModeIcon />
            }
          </Button>

          {

            !isLoggedIn && (
              <>
                <Link className={styles['nav-link']} to="/login">
                  <Button color="inherit">
                    Login
                  </Button>
                </Link>
                <Link className={styles['nav-link']} to="/register">
                  <Button color="inherit">
                    Register
                  </Button>
                </Link>
              </>
            )
          }

          {
            isLoggedIn && (
              <>
                <Link className={styles['nav-link']} to="/todos">
                  <Button color="inherit">
                    To-Do&apos;s
                  </Button>
                </Link>
                <Button onClick={handleLogout} color="inherit">
                  Logout
                </Button>
              </>
            )
          }

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
