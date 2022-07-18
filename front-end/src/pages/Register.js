import React, { useContext } from 'react';
import styled from 'styled-components';
import ContainerCenter from '../components/base/ContainerCenter';
import RegisterForm from '../components/RegisterForm';
import GlobalContext from '../context/GlobalContext';

const RegisterContainer = styled(ContainerCenter)`
  height: 100vh;
  width: 100vw;
  flex-direction: column;

  h1 {
    padding: 20px;
    font-size: 30px
  }

  .errorMessage {
    margin-top: 30px;
    color: var(--color-darker-gray)
  }
`;

export default function Register() {
  const { error } = useContext(GlobalContext);

  return (
    <RegisterContainer>
      <h1>Cadastro</h1>
      <RegisterForm />
      {error && (
        <p
          className="errorMessage"
          data-testid="common_register__element-invalid_register"
        >
          {error}
        </p>)}
    </RegisterContainer>
  );
}
