import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login'
import renderWithRouterAndContext from './helpers/renderWithRoterAndContext';

import userMock from './mocks/userMock';

describe('Testing Login - Page', () => {
  beforeEach(async () => {
    renderWithRouterAndContext(<Login />);
  });

  it('Expected to have all elements', () => {
    expect(screen.getByTestId('common_login__input-email')).toBeInTheDocument();
    expect(screen.getByTestId('common_login__input-password')).toBeInTheDocument();
    expect(screen.getByTestId('common_login__button-login')).toBeInTheDocument();
    expect(screen.getByTestId('common_login__button-register')).toBeInTheDocument();
  });

  it('Expected to login button is disabled with incorrect email', () => {
    userEvent.type(screen.getByTestId('common_login__input-email'), userMock.invalidEmail);
    userEvent.type(screen.getByTestId('common_login__input-password'), userMock.validPassword);

    expect(screen.getByTestId('common_login__button-login').disabled).toBeTruthy();
  });

  it('Expected to login button is disabled with incorrect password', () => {
    userEvent.type(screen.getByTestId('common_login__input-email'), userMock.validEmail);
    userEvent.type(screen.getByTestId('common_login__input-password'), userMock.invalidPassword);

    expect(screen.getByTestId('common_login__button-login').disabled).toBeTruthy();
  });

  it('Expected to login button is enabled with correct fields', () => {
    userEvent.type(screen.getByTestId('common_login__input-email'), userMock.validEmail);
    userEvent.type(screen.getByTestId('common_login__input-password'), userMock.validPassword);

    expect(screen.getByTestId('common_login__button-login').disabled).toBeFalsy();
  });
});
