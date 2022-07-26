import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import Container from '../../components/base/Container';
import Header from '../../components/Header';
import GlobalContext from '../../context/GlobalContext';
import ContainerCenter from '../../components/base/ContainerCenter';
import CheckoutTable from '../../components/CheckoutTable';
import CheckoutForm from '../../components/CheckoutForm';
import ProductContext from '../../context/ProductContext';

const CustomerProductsContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  flex-direction: column;

  .ahh {
    margin-top: 70px;
    padding: 20px;
    flex-direction: column;
  }
`;

export default function CustomerProducts() {
  const [totalValue, setTotalValue] = useState(0);

  const { user, resetUser } = useContext(GlobalContext);
  const { cart } = useContext(ProductContext);

  useEffect(() => {
    setTotalValue(
      cart.reduce((total, { subTotal }) => {
        if (subTotal > 0) return total + parseFloat(subTotal);
        return total;
      }, 0),
    );
  }, [cart, setTotalValue]);

  if (user.role !== 'customer') {
    resetUser();
    return <Navigate to="/" />;
  }

  return (
    <CustomerProductsContainer>
      <Header />
      <ContainerCenter className="ahh">
        <h1>Finalizar Pedido</h1>
        <CheckoutTable />
        <h1>
          {'Total: R$ '}
          <span className="customer_checkout__element-order-total-price">
            {totalValue.toFixed(2).replace('.', ',')}
          </span>
        </h1>
        <h1>Detalhes e Endereço para Entrega</h1>
        <CheckoutForm />
      </ContainerCenter>
    </CustomerProductsContainer>
  );
}
