import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GlobalContext from '../context/GlobalContext';
import Button from './base/Button';
import ContainerCenter from './base/ContainerCenter';
import Input from './base/Input';

const LoginFormContainer = styled(ContainerCenter)`
  flex-direction: column;
  background-color: var(--color-light-gray);
  width: 400px;
  padding: 20px;
  border: 1px solid var(--color-medium-gray);

  p {
    align-self: flex-start;
    margin-bottom: 8px;
  }

  .password-role {
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

export default function LoginForm() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(GlobalContext);

  const handleClick = () => {
    console.log(user);
  };

  return (
    <LoginFormContainer>
      <p>Login</p>
      <Input
        placeholder="email@trybeer.com.br"
        type="text"
        data-test-id="common_login__input-email"
        value={ user.email }
        onChange={ ({ target }) => setUser({ ...user, email: target.value }) }
      />
      <p className="password-role">Senha</p>
      <Input
        placeholder="********"
        type="password"
        data-test-id="common_login__input-password"
        value={ user.password }
        onChange={ ({ target }) => setUser({ ...user, password: target.value }) }
      />
      <Button
        type="button"
        className="login-btn"
        data-test-id="common_login__button-login"
        disabled={ !!(
          user.password.length < MIN_PASSWORD_LENGTH || !/\S+@\S+\.\S+/.test(user.email)
        ) }
        onClick={ handleClick }
      >
        <strong>LOGIN</strong>
      </Button>
      <Button
        type="button"
        className="register-btn"
        data-test-id="common_login__button-register"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </Button>
    </LoginFormContainer>
  );
}
