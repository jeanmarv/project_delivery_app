import React from 'react';
import styled from 'styled-components';
import ContainerCenter from '../components/base/ContainerCenter';
import RegisterForm from '../components/RegisterForm';

const RegisterContainer = styled(ContainerCenter)`
  height: 100vh;
  width: 100vw;
  flex-direction: column;

  h1 {
    padding: 20px;
    font-size: 30px
  }
`;

export default function Register() {
  return (
    <RegisterContainer>
      <h1>Cadastro</h1>
      <RegisterForm />
    </RegisterContainer>
  );
}
