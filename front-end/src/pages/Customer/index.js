import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomerProducts from './CustomerProducts';
import CustomerCheckout from './CustomerCheckout';
import { ProductProvider } from '../../context/ProductContext';
import CustomerOrdersDetails from './CustomerOrderDetails';

export default function CustomerPage() {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/products" element={ <CustomerProducts /> } />
        <Route path="/checkout" element={ <CustomerCheckout /> } />
        <Route path="/orders" element={ <CustomerCheckout /> } />
        <Route path="/orders/:id" element={ <CustomerOrdersDetails /> } />
      </Routes>
    </ProductProvider>
  );
}
