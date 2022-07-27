import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const defaultUser = {
  id: '',
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
  const [totalValue, setTotalValue] = useState(0);
  const [sellerOrders, setSellerOrders] = useState([]);

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
        error,
        newUser,
        setUser,
        navigate,
        setError,
        resetUser,
        setNewUser,
        resetFormUser,
        totalValue,
        setTotalValue,
        sellerOrders,
        setSellerOrders,
      } }
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
