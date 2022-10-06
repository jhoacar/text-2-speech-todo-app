/* eslint-disable react/jsx-no-constructed-context-values */
import { createTheme, ThemeProvider } from '@mui/material';
import { Suspense, useState } from 'react';
import { Spinner } from './components/Spinner';
import { Router } from './routes';

import { AuthContext } from './contexts/auth';
import { ThemeContext } from './contexts/theme';
import { getToken } from './utils/handleToken';
import { getTheme } from './utils/handleTheme';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(getTheme() === 'dark');
  const [isLoggedIn, setIsLoggedIn] = useState(getToken()?.length > 0);
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
        <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
          <Suspense fallback={<Spinner />}>
            <Router />
          </Suspense>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
