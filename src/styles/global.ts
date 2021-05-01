import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #ffffff;
    --purple: #424770;
    --dark-purple: #32325d;
    --gray: #c0c3d2;
    --light-blue: #f8f9fc;
    --orange: #ecbf69;
    --green: #33cc95;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    text-decoration: none;
  }
  
  html {
    @media (max-width:1080px) {
      font-size: 93.74%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--light-blue);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poopins', sans-serif;
    font-weight: 400;
  }
  
  button { 
    cursor: pointer;
  }
  
  h1, h2, h4, h5, h6, strong {
    font-weight: 600;
  }

  // modal
  .react-modal-native {
    background: rgba(0,0,0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  } 
  
  .react-modal-content {
    width: 100%;
    max-width: 800px;
    background: var(--white);
    padding: 1.5rem;
    position: relative;
    border-radius: 0.30rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    border: 0;
    background: transparent;
    color: var(--purple);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`