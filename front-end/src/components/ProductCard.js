import styled from "styled-components"
import ContainerCenter from "./base/ContainerCenter"

const ProductCardContainer = styled(ContainerCenter)`

`;

export default function ProductCard({product}) {
  return (
    <ProductCardContainer>
      {product.name}
    </ProductCardContainer>
  );
}
