import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';

export default function CustomerOrderTable() {
  const { cart } = useContext(ProductContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {cart && cart.map((product, index) => {
          const { name: description, quantity, price } = product;
          if (quantity > 0) {
            return (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-item-number-${index}`
                  }
                >
                  { index + 1 }
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-name-${index}`
                  }
                >
                  { description }
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-quantity-${index}`
                  }
                >
                  { quantity }
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  { price.replace('.', ',') }
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-total-price-${index}`
                  }
                >
                  { (+quantity * +price).toFixed(2).replace('.', ',') }
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
