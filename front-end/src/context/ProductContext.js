import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getProducts, getSellers } from '../api/requests';

const ProductContext = createContext();

export default ProductContext;

export function ProductProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const productReq = await getProducts();
      if (productReq.error) return;
      setProducts(
        productReq.map((product) => ({
          ...product, quantity: 0, subTotal: 0,
        })),
      );

      const sellersReq = await getSellers();
      if (productReq.error) return;
      setSellers(sellersReq);
    }
    fetchAPI();
  }, []);

  const addOnCart = (product, productQuantity) => {
    const { id, price } = product;
    products[id - 1] = {
      ...product,
      quantity: +productQuantity || 0,
      subTotal: (productQuantity * +price || 0).toFixed(2),
    };
    setProducts(products);

    setCart(products.filter(({ quantity }) => quantity > 0));
  };

  const removeOfTheCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <ProductContext.Provider
      value={ { cart, sellers, products, addOnCart, removeOfTheCart } }
    >
      {children}
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
