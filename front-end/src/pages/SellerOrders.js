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
    console.log(user);
    async function fetchOrders() {
      const request = await getSellerOrders(user.email);
      if (request.error) return;

      setSellerOrders(request);
    }
    fetchOrders();
  }, [setSellerOrders]);

  if (user.role !== 'seller') {
    resetUser();
    return <Navigate to="/" />;
  }

  // const sellerOrders = [
  //   {
  //     id: 1,
  //     totalPrice: 135.47,
  //     deliveryAddress: 'Rua Dois',
  //     deliveryNumber: 70,
  //     status: 'Pendente',
  //     saleDate: '26/07/2022'
  //   },
  //   {
  //     id: 2,
  //     totalPrice: 535,
  //     deliveryAddress: 'Rua Dois',
  //     deliveryNumber: 70,
  //     status: 'Em transito',
  //     saleDate: '06/07/2022'
  //   },
  // ];

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
