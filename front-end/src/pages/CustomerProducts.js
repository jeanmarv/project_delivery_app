import React, { useContext } from 'react';
import styled from 'styled-components';
import Container from '../components/base/Container';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

const CustomerProductsContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

export default function CustomerProducts() {
  const { user, resetUser } = useContext(GlobalContext);

  if (user.role !== 'customer') resetUser();

  return (
    <CustomerProductsContainer>
      <Header />
      CustomerProducts
    </CustomerProductsContainer>
  );
}
