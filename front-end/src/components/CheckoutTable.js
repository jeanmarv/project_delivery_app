import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';

export default function CheckoutTable() {
  const { cart, removeOfTheCart } = useContext(ProductContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product, index) => {
          const { id, name: description, quantity, price } = product;
          if (quantity > 0) {
            return (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  { id }
                </td>
                <td
                  data-testid={ `customer_checkout__element-order-table-name-${index}` }
                >
                  { description }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  { quantity }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  { price.replace('.', ',') }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  { (+quantity * +price).toFixed(2).replace('.', ',') }
                </td>
                <td>
                  <button
                    type="button"
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                    onClick={ () => removeOfTheCart(id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          }
          return null;
        })}
      </tbody>
    </table>
  );
}
