import { Box, CircularProgress, Typography } from '@mui/material';

export function Spinner() {
  const isDarkTheme = true;
  const background = isDarkTheme ? 'text.disabled' : 'text.primary';

  return (
    <Box
      sx={{
        display: 'flex',
        bgcolor: background,
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
      <CircularProgress color="success" />
      <Typography>
        Loading
      </Typography>
    </Box>
  );
}
