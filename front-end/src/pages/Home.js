import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

export default function Home() {
  const { user, setUser } = useContext(GlobalContext);

  if (!user.role) return <Navigate to="/login" />;
  if (user.role === 'administrator') return <Navigate to="/admin/manage" />;
  if (user.role === 'seller') return <Navigate to="/seller/orders" />;
  if (user.role === 'customer') return <Navigate to="/customer/products" />;
  setUser({
    name: '',
    password: '',
    token: '',
    role: '',
    email: '',
  });
  return <Navigate to="/login" />;
}
