import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

// eslint-disable-next-line react/prop-types
function Auth({ children }) {
  const [isLoggedIn] = useContext(AuthContext);
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
}

export default Auth;
