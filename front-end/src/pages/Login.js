import React from 'react';
import styled from 'styled-components';
import ContainerCenter from '../components/base/ContainerCenter';
import LoginForm from '../components/LoginForm';

const LoginContainer = styled(ContainerCenter)`
  height: 100vh;
  width: 100vw;
`;

export default function Login() {
  return (
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
  );
}
