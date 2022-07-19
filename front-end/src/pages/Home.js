import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

const avaibleRoles = ['administrator', 'seller', 'customer'];

export default function Home() {
  const { user, resetUser } = useContext(GlobalContext);

  useEffect(() => {
    if (!avaibleRoles.includes(user.role) && user.role !== '') resetUser();
  }, [resetUser, user.role]);

  if (avaibleRoles.includes(user.role)) {
    delete user.password;
    localStorage.setItem('user', JSON.stringify(user));
  }

  if (user.role === avaibleRoles[0]) return <Navigate to="/admin/manage" />;
  if (user.role === avaibleRoles[1]) return <Navigate to="/seller/orders" />;
  if (user.role === avaibleRoles[2]) return <Navigate to="/customer/products" />;

  return <Navigate to="/login" />;
}
