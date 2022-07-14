import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { user } = useContext(GlobalContext);

  return (
    <HeaderContainer>
      <ContainerCenter className="role">
        PEDIDOS
      </ContainerCenter>
      <ContainerCenter className="username">
        {user.name.length === 0 ? 'User' : user.name}
      </ContainerCenter>
      <Button className="exit-btn" type="button" onClick={ () => navigate('/login') }>
        Sair
      </Button>
    </HeaderContainer>
  );
}
