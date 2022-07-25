import React, { useState } from 'react';
// import GlobalContext from '../context/GlobalContext';

export default function CheckoutForm() {
  const [address, setAddress] = useState({
    seller: '',
    address: '',
    addressNumber: 0,
  });

  const handleClick = async () => {
    console.log('Oi');
  };

  return (
    <form>
      {/* <label htmlFor="name">
        P. Vendedora Responsável
        <select
          onChange={ ({ target }) => setAddress({ ...address, role: target.value }) }
          data-testid="customer_checkout__select-seller"
        >
        </select>
      </label> */}
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
