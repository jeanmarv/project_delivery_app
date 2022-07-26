import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getProducts } from '../api/requests';

const ProductContext = createContext();

export default ProductContext;

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const request = await getProducts();
      if (request.error) return;
      setProducts(request);
    }
    fetchProducts();
  }, [cart]);

  const addOnCart = (product, productQuantity) => {
    product.quantity = productQuantity;
    product.subTotal = +productQuantity * +product.price;
    products[product.id - 1] = product;

    setCart(
      products.filter(({ quantity }) => quantity > 0),
    );
  };

  const removeOfTheCart = (id) => {
    setCart(
      cart.filter((product) => product.id !== id),
    );
  };

  return (
    <ProductContext.Provider
      value={ {
        cart,
        setCart,
        products,
        addOnCart,
        setProducts,
        removeOfTheCart,
      } }
    >
      {children}
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
