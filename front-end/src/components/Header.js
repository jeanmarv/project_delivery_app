import React, { useContext } from 'react';
import styled from 'styled-components';
import GlobalContext from '../context/GlobalContext';
import Button from './base/Button';
import Container from './base/Container';
import ContainerCenter from './base/ContainerCenter';

const HeaderContainer = styled(Container)`
  width: 100vw;
  height: 70px;
  top: 0;
  position: fixed;
  background-color: var(--color-main-green);
  font-size: 18px;

  .role {
    width: 20vw;
    font-weight: 500;
    height: 100%;
    background-color: var(--color-light-green);
  }

  .my-requests-btn {
    width: 20vw;
    font-weight: 500;
    height: 100%;
    background-color: var(--color-light-green);
    border-radius: 0;
    font-size: 16px;
    padding: 0;
  }

  .username {
    background-color: var(--color-purple);
    border-radius: 0;
    font-weight: 500;
    width: 260px;
    position: fixed;
    right: 130px;
    height: 70px;
    color: var(--color-white);
  }

  .exit-btn {
    background-color: var(--color-blue);
    border-radius: 0;
    font-weight: 500;
    width: 130px;
    font-size: 18px;
    position: fixed;
    right: 0;
    height: 70px;
    color: var(--color-white);
  }
`;

export default function Header() {
  const { user, resetUser } = useContext(GlobalContext);

  const handleLogout = () => {
    resetUser();
  };

  const role = () => {
    if (user.role === 'administrator') return 'GERENCIAR USUÁRIOS';
    if (user.role === 'seller') return 'PEDIDOS';
    if (user.role === 'customer') return 'PRODUTOS';
  };

  return (
    <HeaderContainer>
      <ContainerCenter className="role">
        {role()}
      </ContainerCenter>
      <Button className="my-requests-btn">
        {user.role === 'customer' && 'MEUS PEDIDOS'}
      </Button>
      <ContainerCenter className="username">
        {user.name.length === 0 ? 'User' : user.name}
      </ContainerCenter>
      <Button className="exit-btn" type="button" onClick={ handleLogout }>
        Sair
      </Button>
    </HeaderContainer>
  );
}
