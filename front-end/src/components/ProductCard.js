import styled from "styled-components"
import ContainerCenter from "./base/ContainerCenter"
import Button from '../components/base/Button';
import Input from '../components/base/Input';
import { useState } from "react";

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

export default function ProductCard({product}) {
  const [productQty, setProductQty] = useState(0);

  return (
    <ProductCardContainer>
      <p className="price-product">{product.price}</p>
      <img src={product.urlImage}/>
      <ContainerCenter className="footer-infos">
        <p className="name-product">{product.name}</p>
        <ContainerCenter>
          <Button 
            className="btn btn-minus"
            type="button" 
            onClick={ () => setProductQty(+productQty - 1)}
          >
            -
          </Button>
          <Input 
            type="number" 
            onChange={ ({ target}) => setProductQty(target.value)} 
            value={productQty}
            className="input-productQty"  
          />
          <Button
            className="btn btn-plus"
            type="button" 
            onClick={ () => setProductQty(+productQty + 1)}
          >
            +
          </Button>
        </ContainerCenter>
      </ContainerCenter>
    </ProductCardContainer>
  );
}
