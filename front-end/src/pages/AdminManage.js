import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

export default function AdminManage() {
  const { user, resetUser } = useContext(GlobalContext);

  if (user.role !== 'administrator') {
    resetUser();
    return <Navigate to="/" />;
  }

  return <div>AdminManage</div>;
}
