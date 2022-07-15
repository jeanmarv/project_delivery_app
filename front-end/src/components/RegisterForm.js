import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GlobalContext from '../context/GlobalContext';
import Button from './base/Button';
import ContainerCenter from './base/ContainerCenter';
import Input from './base/Input';
import post from '../api/post';

const RegisterFormContainer = styled(ContainerCenter)`
  flex-direction: column;
  background-color: var(--color-light-gray);
  width: 400px;
  padding: 20px;
  border: 1px solid var(--color-medium-gray);

  p {
    align-self: flex-start;
    margin-bottom: 8px;
  }

  .password-role, .email-role {
    margin-top: 20px;
  }

  .login-btn {
    background-color: var(--color-main-green);
    color: var(--color-white);
    margin-top: 20px;
  }

  .login-btn:disabled {
    opacity: 50%;
  }

  .register-btn {
    color: var(--color-main-green);
    margin-top: 20px;
    border: 1px solid var(--color-main-green);
  }

  span {
  }
`;

const MIN_PASSWORD_LENGTH = 6;
const MIN_NAME_LENGTH = 12;

export default function RegisterForm() {
  const navigate = useNavigate();
  const { user, setUser, setError } = useContext(GlobalContext);

  const handleClick = async () => {
    try {
      const request = await post(
        'register',
        { email: user.email, password: user.password, name: user.name },
      );
      if (request.role) {
        await setUser({ ...user, ...request });
        await setError('');
        navigate('/');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <RegisterFormContainer>
      <p>Nome</p>
      <Input
        placeholder="Seu nome"
        type="text"
        data-testid="common_register__input-name"
        value={ user.name }
        onChange={ ({ target }) => setUser({ ...user, name: target.value }) }
      />
      <p className="email-role">Email</p>
      <Input
        placeholder="seu-email@site.com.br"
        type="text"
        data-testid="common_register__input-email"
        value={ user.email }
        onChange={ ({ target }) => setUser({ ...user, email: target.value }) }
      />
      <p className="password-role">Senha</p>
      <Input
        placeholder="********"
        type="password"
        data-testid="common_register__input-password"
        value={ user.password }
        onChange={ ({ target }) => setUser({ ...user, password: target.value }) }
      />
      <Button
        type="button"
        className="login-btn"
        data-testid="common_register__button-register"
        disabled={ !!(
          user.password.length < MIN_PASSWORD_LENGTH
          || !/\S+@\S+\.\S+/.test(user.email)
          || user.name.length < MIN_NAME_LENGTH
        ) }
        onClick={ handleClick }
      >
        <strong>CADASTRAR</strong>
      </Button>
    </RegisterFormContainer>
  );
}
