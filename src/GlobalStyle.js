import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-size: 16px;
        font-family: 'Teko', sans-serif;

        h1{
          font-size: 2rem;
        }
        h2{
          font-size: 1.7rem;
        }
        span{
          font-size: 1.5rem;
        }
    }

    html, body{
        background: #cccccc;
        max-width: 100vw;
        height: auto;
    }
`;