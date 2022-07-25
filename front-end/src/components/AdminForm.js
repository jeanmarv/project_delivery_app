import React, { useContext } from 'react';
import { createUser } from '../api/requests';
import GlobalContext from '../context/GlobalContext';

export default function AdminForm() {
  const { newUser, setNewUser, setError, resetFormUser } = useContext(GlobalContext);

  const seller = 'seller';
  const customer = 'customer';

  const handleClick = async () => {
    const request = await createUser(
      {
        email: newUser.email,
        password: newUser.password,
        name: newUser.name,
        role: newUser.role,
      },
    );
    if (request.error) {
      setError(request.error);
      return;
    }
    resetFormUser();
    setError('');
  };

  const validEmail = /\S+@\S+\.\S+/;
  const disableButton = validEmail.test(user.email)
    && user.password.length >= 6
    && user.name.length > 12
    && user.role !== undefined;

  return (
    <form>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          placeholder="Tryber de oliveira"
          value={ newUser.name }
          data-testid="admin_manage__input-name"
          onChange={ ({ target }) => setNewUser({ ...newUser, name: target.value }) }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="text"
          placeholder="email@trybeer.com.br"
          value={ newUser.email }
          data-testid="admin_manage__input-email"
          onChange={ ({ target }) => setNewUser({ ...newUser, email: target.value }) }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          placeholder="***********"
          value={ newUser.password }
          data-testid="admin_manage__input-password"
          onChange={ ({ target }) => setNewUser({ ...newUser, password: target.value }) }
        />
      </label>
      <select
        onChange={ ({ target }) => setNewUser({ ...newUser, role: target.value }) }
        data-testid="admin_manage__select-role"
      >
        <option
          value={ seller }
        >
          Vendedor
        </option>
        <option
          value={ customer }
        >
          Cliente
        </option>
      </select>
      <button
        type="button"
        data-testid="admin_manage__button-register"
        disabled={ !disableButton }
        onClick={ handleClick }
      >
        CADASTRAR
      </button>
    </form>
  );
}
