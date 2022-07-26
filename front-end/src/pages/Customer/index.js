import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomerProducts from './CustomerProducts';
import CustomerCheckout from './CustomerCheckout';
import { ProductProvider } from '../../context/ProductContext';

export default function CustomerPage() {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/products" element={ <CustomerProducts /> } />
        <Route path="/checkout" element={ <CustomerCheckout /> } />
      </Routes>
    </ProductProvider>
  );
}
