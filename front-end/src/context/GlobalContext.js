import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const defaultUser = {
  name: '',
  password: '',
  token: '',
  role: '',
  email: '',
};

const GlobalContext = createContext();

export default GlobalContext;

export function GlobalProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(defaultUser);

  const [error, setError] = useState('');

  const resetUser = () => {
    setUser(defaultUser);
    localStorage.removeItem('user');
  };

  return (
    <GlobalContext.Provider
      value={ {
        user,
        setUser,
        error,
        setError,
        resetUser,
        navigate,
      } }
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
