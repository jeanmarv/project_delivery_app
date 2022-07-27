import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AdminManage from './pages/AdminManage';
import CustomerPage from './pages/Customer';
// import CustomerProducts from './pages/CustomerProducts';
// import CustomerCheckout from './pages/CustomerCheckout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SellerOrders from './pages/SellerOrders';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } replace />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/seller/orders" element={ <SellerOrders /> } />
      <Route path="/customer/*" element={ <CustomerPage /> } />
      <Route path="/admin/manage" element={ <AdminManage /> } />
    </Routes>
  );
}

export default App;
