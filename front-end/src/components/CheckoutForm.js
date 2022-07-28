import React, { useContext, useEffect, useState } from 'react';
import { createSale } from '../api/requests';
import GlobalContext from '../context/GlobalContext';
import ProductContext from '../context/ProductContext';

export default function CheckoutForm() {
  const [totalPrice, setTotalValue] = useState(0);
  const { user, navigate } = useContext(GlobalContext);
  const { sellers, cart, setOrders } = useContext(ProductContext);

  useEffect(() => {
    setTotalValue(
      cart.reduce((total, { subTotal }) => {
        if (subTotal > 0) return total + parseFloat(subTotal);
        return total;
      }, 0),
    );
  }, [cart, setTotalValue]);

  const [address, setAddress] = useState({
    sellerId: sellers[0].id,
    deliveryAddress: '',
    deliveryNumber: '',
  });

  const handleClick = async () => {
    const request = await createSale({
      totalPrice: totalPrice.toFixed(2),
      status: 'Pendente',
      ...address,
      userId: user.id,
      productsSale: cart,
    });

    if (request.error) return;
    setOrders(request);
    navigate(`/customer/orders/${request.id}`);
  };

  return (
    <form>
      <label htmlFor="name">
        P. Vendedora Responsável
        <select
          onChange={ ({ target }) => setAddress({ ...address, sellerId: target.value }) }
          data-testid="customer_checkout__select-seller"
          value={ address.sellerId }
        >
          {sellers && sellers.map(({ id, name }) => (
            <option key={ id } value={ id }>{name}</option>
          ))}
        </select>
      </label>
      <label htmlFor="email">
        Endereço
        <input
          type="text"
          placeholder="Av. A, Bairro B"
          value={ address.deliveryAddress }
          data-testid="customer_checkout__input-address"
          onChange={
            ({ target }) => setAddress({ ...address, deliveryAddress: target.value })
          }
        />
      </label>
      <label htmlFor="password">
        Número
        <input
          type="number"
          placeholder="10"
          value={ address.deliveryNumber }
          data-testid="customer_checkout__input-addressNumber"
          onChange={
            ({ target }) => setAddress({ ...address, deliveryNumber: target.value })
          }
        />
      </label>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handleClick }
      >
        FINALIZAR PEDIDO
      </button>
    </form>
  );
}
