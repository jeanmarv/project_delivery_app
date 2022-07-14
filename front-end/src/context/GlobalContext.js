import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const GlobalContext = createContext();

export default GlobalContext;

export function GlobalProvider({ children }) {
  const [user, setUser] = useState({
    name: '',
    password: '',
    token: '',
    role: '',
    email: '',
  });

  const [error, setError] = useState('');

  return (
    <GlobalContext.Provider value={ { user, setUser, error, setError } }>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
