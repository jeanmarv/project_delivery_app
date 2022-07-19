import React, { useContext } from 'react';
import styled from 'styled-components';
import { getProducts } from '../api/requests';
import Container from '../components/base/Container';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

const CustomerProductsContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  flex-direction: column;

  button {
    position: absolute;
    top: 200px;
  }
`;

const handleClick = async () => {
  const products = await getProducts();
  console.log(products);
};

export default function CustomerProducts() {
  const { user, resetUser } = useContext(GlobalContext);

  if (user.role !== 'customer') resetUser();

  return (
    <CustomerProductsContainer>
      <Header />
      <button type="button" onClick={ handleClick }>pegar produtos</button>
    </CustomerProductsContainer>
  );
}
