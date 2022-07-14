import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: var(--color-dark);
  }

  p, h1, h2, h3, h4, h5, h6, span, div {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: var(--color-dark);
  }

  :root {
    --color-main-green: #036b52;
    --color-light-green: #2fc18c;

    --color-blue: #056cf9;
    --color-purple: #421981;

    --color-white: #f2fffc;

    --color-dark: #001813;

    --color-light-gray: #eaf1ef;
    --color-medium-gray: #b1c2be;
    --color-darker-gray: #828282;
  }
`;

export default GlobalStyle;
