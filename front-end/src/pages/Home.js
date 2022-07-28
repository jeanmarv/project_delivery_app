import React from 'react';
import { Navigate } from 'react-router-dom';

const avaibleRoles = ['administrator', 'seller', 'customer'];

export default function Home() {
  if (!localStorage.user) return <Navigate to="/login" />;

  const user = JSON.parse(localStorage.user);
  if (user.role === avaibleRoles[0]) return <Navigate to="/admin/manage" />;
  if (user.role === avaibleRoles[1]) return <Navigate to="/seller/orders" />;
  if (user.role === avaibleRoles[2]) return <Navigate to="/customer/products" />;

  return <Navigate to="/login" />;
}
