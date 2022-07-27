import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../../components/Header';
import GlobalContext from '../../context/GlobalContext';

export default function CustomerOrdersDetails() {
  const { user, resetUser } = useContext(GlobalContext);

  if (user.role !== 'customer') {
    resetUser();
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Header />
    </div>
  );
}
