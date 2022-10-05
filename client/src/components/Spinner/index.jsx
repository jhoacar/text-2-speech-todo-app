import { Box, CircularProgress, Typography } from '@mui/material';

export function Spinner() {
  return (
    <Box sx={{
      display: 'flex',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100vh',
      heigth: '100vw',
    }}
    >
      <CircularProgress color="success" />
      <Typography>
        Loading
      </Typography>
    </Box>
  );
}
