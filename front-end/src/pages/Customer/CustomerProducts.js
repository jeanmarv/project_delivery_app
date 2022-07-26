import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import Container from '../../components/base/Container';
import ContainerCenter from '../../components/base/ContainerCenter';
import Header from '../../components/Header';
import GlobalContext from '../../context/GlobalContext';
import ProductCard from '../../components/ProductCard';
import Button from '../../components/base/Button';
import ProductContext from '../../context/ProductContext';

const CustomerProductsContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  flex-direction: column;

  .products-container {
    margin-top: 70px;
    flex-wrap: wrap;
  }

  .car-shop-btn {
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: fit-content;
    background-color: var(--color-main-green);
    color: var(--color-white);
    font-size: 20px;
    font-weight: 500;
    z-index: 10;
    padding: 15px 30px
  }

  .car-shop-btn:disabled {
    background-color: var(--color-light-green);
  }

  .total-value {
    color: var(--color-white);
    font-size: 20px;
    font-weight: 500;
  }
`;

export default function CustomerProducts() {
  const [totalValue, setTotalValue] = useState(0);

  const { user, resetUser, navigate } = useContext(GlobalContext);
  const { products, cart } = useContext(ProductContext);

  useEffect(() => {
    setTotalValue(
      cart.reduce((total, { subTotal }) => {
        if (subTotal > 0) return total + parseFloat(subTotal);
        return total;
      }, 0),
    );
  }, [cart]);

  if (user.role !== 'customer') {
    resetUser();
    return <Navigate to="/" />;
  }

  return (
    <CustomerProductsContainer>
      <Header />
      <ContainerCenter className="products-container">
        {products && products.map((product) => (
          <ProductCard
            key={ product.id }
            data-testid={ `customer_products__element-card-price-${product.id}` }
            product={ product }
          >
            {product.name}
          </ProductCard>
        ))}
      </ContainerCenter>
      <Button
        disabled={ totalValue <= 0 }
        data-testid="customer_products__button-cart"
        className="car-shop-btn"
        onClick={ () => navigate('/customer/checkout') }
      >
        {'Ver Carrinho: R$ '}
        <span
          className="total-value"
          data-testid="customer_products__checkout-bottom-value"
        >
          {totalValue > 0 ? totalValue.toFixed(2).replace('.', ',') : '0,00'}
        </span>
      </Button>
    </CustomerProductsContainer>
  );
}
