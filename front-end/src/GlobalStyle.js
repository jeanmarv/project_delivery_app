import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  p, h1, h2, h3, h4, h5, h6, span {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --color-main-green: #036B52;
    --color-light-green: #2fc18c;

    --color-white: white;

    --color-light-gray: #eaf1ef;
    --color-medium-gray: #b1c2be;
    --color-darker-gray: #828282
  }
`;

export default GlobalStyle;
