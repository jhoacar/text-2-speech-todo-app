import { ErrorOutline } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Layout from '../../layout';

function Error() {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '90%',
        }}
      >
        <Box
          elevation={10}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            margin: '1rem',
            maxWidth: '40rem',
            width: '100%',
          }}
        >
          <Typography variant="h4" textAlign="center">
            <ErrorOutline />
            {' '}
            404 - Not Found
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
}

export default Error;
