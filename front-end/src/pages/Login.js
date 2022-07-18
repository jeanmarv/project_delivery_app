import React, { useContext } from 'react';
import styled from 'styled-components';
import ContainerCenter from '../components/base/ContainerCenter';
import LoginForm from '../components/LoginForm';
import GlobalContext from '../context/GlobalContext';

const LoginContainer = styled(ContainerCenter)`
  height: 100vh;
  width: 100vw;
  flex-direction: column;

  .errorMessage {
    margin-top: 30px;
    color: var(--color-darker-gray)
  }
`;

export default function Login() {
  const { error } = useContext(GlobalContext);

  return (
    <LoginContainer>
      <LoginForm />
      {error && (
        <p
          className="errorMessage"
          data-testid="common_login__element-invalid-email"
        >
          {error}
        </p>)}
    </LoginContainer>
  );
}
