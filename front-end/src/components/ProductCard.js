import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ContainerCenter from './base/ContainerCenter';
import Button from './base/Button';
import Input from './base/Input';
import GlobalContext from '../context/GlobalContext';

const ProductCardContainer = styled(ContainerCenter)`
  flex-direction: column;
  width: 400px;
  margin: 20px;
  border: 1px solid var(--color-medium-gray);

  .price-product {
    position: relative;
    top: 50px;
    left: -70px;
    width: fit-content;
    font-weight: 700;
    font-size: 24px;
    background-color: rgba(255,255,255,0.7);
    padding: 5px;
    border-radius: 5px;
  }

  img {
    height: 350px;
  }

  .footer-infos {
    height: 150px;
    flex-direction: column;
    background-color: var(--color-light-gray);
    width: 100%;
  }

  .name-product {
    font-size: 18px;
    margin-bottom: 15px;
  }

  .input-productQty {
    border-radius: 0;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    width: 75px;
  }

  .btn {
    background-color: var(--color-main-green);
    color: var(--color-white);
    font-weight: 700;
    font-size: 24px;
    border-radius: 0;
    border: 1px solid var(--color-main-green);
    width: 50px;
  }

  .btn-plus {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .btn-minus {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

export default function ProductCard({ product }) {
  const [productQty, setProductQty] = useState(0);

  const { products, setProducts, setTotalValue } = useContext(GlobalContext);

  useEffect(() => {
    const productInfo = products[product.id - 1];
    productInfo.quantity = productQty;
    products[product.id - 1] = productInfo;
    setProducts(products);

    if (product.quantity < 0) setProductQty(0);

    const value = products.reduce((total, pr) => {
      if (pr.quantity > 0) return total + (pr.quantity * parseFloat(pr.price));
      return total;
    }, 0);
    setTotalValue(value);
  }, [product, products, productQty, setProducts, setTotalValue]);

  return (
    <ProductCardContainer>
      <p
        data-testid={ `customer_products__element-card-price-${product.id}` }
        className="price-product"
      >
        {product.price.replace('.', ',')}
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.urlImage }
        alt={ product.name }
      />
      <ContainerCenter className="footer-infos">
        <p
          data-testid={ `customer_products__element-card-title-${product.id}` }
          className="name-product"
        >
          {product.name}
        </p>
        <ContainerCenter>
          <Button
            className="btn btn-minus"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            type="button"
            onClick={ () => setProductQty(+productQty - 1) }
          >
            -
          </Button>
          <Input
            type="number"
            onChange={ ({ target }) => setProductQty(target.value) }
            value={ productQty }
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
            className="input-productQty"
          />
          <Button
            className="btn btn-plus"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            type="button"
            onClick={ () => setProductQty(+productQty + 1) }
          >
            +
          </Button>
        </ContainerCenter>
      </ContainerCenter>
    </ProductCardContainer>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
    quantity: PropTypes.number,
  }).isRequired,
};
