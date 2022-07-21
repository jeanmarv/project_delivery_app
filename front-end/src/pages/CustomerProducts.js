import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProducts } from '../api/requests';
import Container from '../components/base/Container';
import ContainerCenter from '../components/base/ContainerCenter';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

const CustomerProductsContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  flex-direction: column;

  .products-container {
    margin-top: 70px;
    flex-wrap: wrap;
  }
`;

export default function CustomerProducts() {
  const [products, setProducts] = useState([]);
  
  const { user, resetUser } = useContext(GlobalContext);
  
  useEffect(() => {
    async function fetchProducts() { setProducts(await getProducts()); }
    fetchProducts();
  }, [setProducts]);

  if (user.role !== 'customer') resetUser();

  return (
    <CustomerProductsContainer>
      <Header />
      <ContainerCenter className="products-container">
        {products && products.map((product) => <p key={product.id}>{product.name}</p>)}
      </ContainerCenter>
    </CustomerProductsContainer>
  );
}
