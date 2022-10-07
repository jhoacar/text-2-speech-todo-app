import {
  AppBar, Box, Link, Typography,
} from '@mui/material';

function Footer() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}
    >
      <AppBar
        sx={{
          padding: '1rem',
          position: 'static',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Typography variant="h6" component="h4" textAlign="center">
          <Link sx={{ color: 'white' }} href="https://github.com/jhoacar/txt2speech-todo-app">
            To-Do App based in React
          </Link>
        </Typography>
      </AppBar>
    </Box>
  );
}

export default Footer;
