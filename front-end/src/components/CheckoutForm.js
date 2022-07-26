import React, { useContext, useState } from 'react';
import ProductContext from '../context/ProductContext';

export default function CheckoutForm() {
  const { sellers } = useContext(ProductContext);

  const [address, setAddress] = useState({
    seller: sellers[0].name,
    address: '',
    addressNumber: 0,
  });

  const handleClick = async () => {
    console.log('Oi');
  };

  return (
    <form>
      <label htmlFor="name">
        P. Vendedora Responsável
        <select
          onChange={ ({ target }) => setAddress({ ...address, seller: target.value }) }
          data-testid="customer_checkout__select-seller"
          value={ address.seller }
        >
          {sellers && sellers.map(({ id, name }) => (
            <option key={ id } default>{name}</option>
          ))}
        </select>
      </label>
      <label htmlFor="email">
        Endereço
        <input
          type="text"
          placeholder="Av. A, Bairro B"
          value={ address.address }
          data-testid="customer_checkout__input-address"
          onChange={ ({ target }) => setAddress({ ...address, email: target.value }) }
        />
      </label>
      <label htmlFor="password">
        Número
        <input
          type="number"
          placeholder="10"
          value={ address.addressNumber }
          data-testid="customer_checkout__input-addressNumber"
          onChange={ ({ target }) => setAddress({ ...address, password: target.value }) }
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
