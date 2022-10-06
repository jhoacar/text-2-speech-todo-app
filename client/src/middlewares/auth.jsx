import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import { validateToken } from '../services/auth';
import { removeToken } from '../utils/handleToken';

// eslint-disable-next-line react/prop-types
function Auth({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);

  if (isLoggedIn) {
    useEffect(() => {
      validateToken()
        .then((validated) => {
          setIsLoggedIn(validated);
        })
        .catch((error) => {
          console.log(error);
          setIsLoggedIn(false);
          removeToken();
        });
    }, []);
  }

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
}

export default Auth;
