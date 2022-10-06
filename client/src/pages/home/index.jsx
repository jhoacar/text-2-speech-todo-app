import { Box, Paper, Typography } from '@mui/material';
import Layout from '../../layout';

function Home() {
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
        <Paper
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
          <Typography>
            Hola Mundo
          </Typography>
        </Paper>
      </Box>
    </Layout>
  );
}

export default Home;
