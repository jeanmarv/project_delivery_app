import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import ContainerCenter from '../components/base/ContainerCenter';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

const SellerOrdersContainer = styled(ContainerCenter)`
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

export default function SellerOrders() {
  const { user, resetUser } = useContext(GlobalContext);

  if (user.role !== 'seller') {
    resetUser();
    return <Navigate to="/" />;
  }

  return (
    <SellerOrdersContainer>
      <Header />
      SellerOrders
    </SellerOrdersContainer>
  );
}
