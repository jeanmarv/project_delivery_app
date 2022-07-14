import React from 'react';
import styled from 'styled-components';
import ContainerCenter from '../components/base/ContainerCenter';
import Header from '../components/Header';

const SellerOrdersContainer = styled(ContainerCenter)`
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

export default function SellerOrders() {
  return (
    <SellerOrdersContainer>
      <Header />
      SellerOrders
    </SellerOrdersContainer>
  );
}
