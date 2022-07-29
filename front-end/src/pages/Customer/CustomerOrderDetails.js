import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import ContainerCenter from '../../components/base/ContainerCenter';
import CustomerOrderTable from '../../components/CustomerOrderTable';
import Header from '../../components/Header';
import GlobalContext from '../../context/GlobalContext';
import ProductContext from '../../context/ProductContext';

const CustomerOrderDetailsContainer = styled(ContainerCenter)`
  height: 100vh;
  width: 100vw;
  flex-direction: column;

  .ahh {
    margin-top: 70px;
    padding: 20px;
    flex-direction: column;
  }
`;

const dIdStatus = 'customer_order_details__element-order-details-label-delivery-status';

export default function CustomerOrdersDetails() {
  const { user } = useContext(GlobalContext);
  const { orders } = useContext(ProductContext);

  if (user.role !== 'customer') {
    return <Navigate to="/" />;
  }

  return (
    <CustomerOrderDetailsContainer>
      <Header />
      <ContainerCenter className="ahh">
        <h1>Detalhes do pedido</h1>
        <p data-testid="customer_order_details__element-order-details-label-order-id">
          {`PEDIDO: ${orders.id}`}
        </p>
        <p data-testid="customer_order_details__element-order-details-label-seller-name">
          P. Vendedora: eu
        </p>
        <p data-testid="customer_order_details__element-order-details-label-order-date">
          {orders.saleDate}
        </p>
        <p
          data-testid={ dIdStatus }
        >
          {orders.status}
        </p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          disabled
        >
          MARCAR COMO ENTREGUE
        </button>
        <CustomerOrderTable />
        <p data-testid="customer_order_details__element-order-total-price">
          {`Total: ${orders.totalPrice}`}
        </p>
      </ContainerCenter>
    </CustomerOrderDetailsContainer>
  );
}
