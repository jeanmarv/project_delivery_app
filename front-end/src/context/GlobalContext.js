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

const createUser = {
  name: '',
  password: '',
  role: 'seller',
  email: '',
};

const GlobalContext = createContext();

export default GlobalContext;

export function GlobalProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(defaultUser);
  const [newUser, setNewUser] = useState(createUser);
  const [error, setError] = useState('');

  const resetUser = () => {
    setUser(defaultUser);
    localStorage.removeItem('user');
  };

  const resetFormUser = () => {
    setNewUser(createUser);
  };

  return (
    <GlobalContext.Provider
      value={ {
        user,
        setUser,
        newUser,
        setNewUser,
        error,
        setError,
        resetUser,
        resetFormUser,
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
