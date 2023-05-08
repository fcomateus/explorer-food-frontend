import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BODY};
    -webkit-font-smoothing: antialiased; 
    font-family: 'Poppins', sans-serif;
  }

  h1, h2 {
    font-weight: 500;
  }

  input {
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button, a {
        cursor: pointer;
        transition: filter 0.2s;
  }
  
  button:hover, a:hover {
    filter: brightness(0.9);
  }
`