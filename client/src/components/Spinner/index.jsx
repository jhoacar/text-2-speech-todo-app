import { Box, CircularProgress, Typography } from '@mui/material';

export function Spinner() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
      }}
    >
      <CircularProgress color="info" />
      <Typography>
        Loading
      </Typography>
    </Box>
  );
}
