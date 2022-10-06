import {
  AppBar, Box, Typography,
} from '@mui/material';

function Footer() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <AppBar
        sx={{
          padding: '1rem',
          position: 'static',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" component="h4" textAlign="center">
          Todo App based in React using Authorization with Express Server
        </Typography>
      </AppBar>
    </Box>
  );
}

export default Footer;
