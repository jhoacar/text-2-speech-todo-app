import { BottomNavigation, Typography } from '@mui/material';

function Footer() {
  return (
    <BottomNavigation sx={{
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Typography color="InfoText" textAlign="center">
        Todo App using React using Authorization with Express Server
      </Typography>
    </BottomNavigation>
  );
}

export default Footer;
