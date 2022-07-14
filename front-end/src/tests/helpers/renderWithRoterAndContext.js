import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from '../../context/GlobalContext';
import GlobalStyle from '../../GlobalStyle';

export default function renderWithRouterAndContext(component) {
  const history = createMemoryHistory();
  return ({
    ...render(
      <BrowserRouter history={ history }>
        <GlobalProvider>
          <GlobalStyle />
          {component}
        </GlobalProvider>
      </BrowserRouter>,
    ),
    history,
  });
}
