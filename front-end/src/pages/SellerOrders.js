import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { getSellerOrders } from '../api/requests';
import SellerCard from '../components/SellerCard';
import ContainerCenter from '../components/base/ContainerCenter';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

const SellerOrdersContainer = styled(ContainerCenter)`
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

export default function SellerOrders() {
  const { user, resetUser, sellerOrders, setSellerOrders } = useContext(GlobalContext);

  useEffect(() => {
    async function fetchOrders() {
      const request = await getSellerOrders(user.email);
      if (request.error) return;

      setSellerOrders(request);
    }
    fetchOrders();
  }, [setSellerOrders, user]);

  if (user.role !== 'seller') {
    resetUser();
    return <Navigate to="/" />;
  }

  return (
    <SellerOrdersContainer>
      <Header />
      <div>
        {sellerOrders && sellerOrders.map((order) => (
          <SellerCard
            key={ order.id }
            order={ order }
          />
        ))}
      </div>
    </SellerOrdersContainer>
  );
}
