import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from '../pages/Register'
import renderWithRouterAndContext from './helpers/renderWithRoterAndContext';

import userMock from './mocks/userMock';

describe('Testing Login - Page', () => {
  beforeEach(async () => {
    renderWithRouterAndContext(<Register />);
  });

  it('Expected to have all elements', () => {
    expect(screen.getByTestId('common_register__input-name')).toBeInTheDocument();
    expect(screen.getByTestId('common_register__input-email')).toBeInTheDocument();
    expect(screen.getByTestId('common_register__input-password')).toBeInTheDocument();
    expect(screen.getByTestId('common_register__button-register')).toBeInTheDocument();
  });

  it('Expected to register button is disabled with incorrect email', () => {
    userEvent.type(screen.getByTestId('common_register__input-name'), userMock.validName);
    userEvent.type(screen.getByTestId('common_register__input-email'), userMock.invalidEmail);
    userEvent.type(screen.getByTestId('common_register__input-password'), userMock.validPassword);

    expect(screen.getByTestId('common_register__button-register').disabled).toBeTruthy();
  });

  it('Expected to register button is disabled with incorrect password', () => {
    userEvent.type(screen.getByTestId('common_register__input-name'), userMock.validName);
    userEvent.type(screen.getByTestId('common_register__input-email'), userMock.validEmail);
    userEvent.type(screen.getByTestId('common_register__input-password'), userMock.invalidPassword);

    expect(screen.getByTestId('common_register__button-register').disabled).toBeTruthy();
  });

  it('Expected to register button is enabled with correct fields', () => {
    userEvent.type(screen.getByTestId('common_register__input-name'), userMock.validName);
    userEvent.type(screen.getByTestId('common_register__input-email'), userMock.validEmail);
    userEvent.type(screen.getByTestId('common_register__input-password'), userMock.validPassword);

    expect(screen.getByTestId('common_register__button-register').disabled).toBeFalsy();
  });
});
