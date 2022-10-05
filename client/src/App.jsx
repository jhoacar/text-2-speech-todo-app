import { createTheme, ThemeProvider } from '@mui/material';
import { Suspense, useState } from 'react';
import { Spinner } from './components/Spinner';
import { Router } from './routes';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'ligth',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Spinner />}>
        <Router />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
