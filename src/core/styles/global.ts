import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f0ebf8;
    color: #151b26;
    -webkit-font-smoothing: antialiased;
  }

  body::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
    height: 8px;
  }

  body::-webkit-scrollbar-button {
    display: none;
  }

  body::-webkit-scrollbar-thumb {
    width: 1px;
    background-color: #3f1227;
  }

  body::-webkit-scrollbar-corner {
    display: none;
  }

  div::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
    height: 8px;
  }

  div::-webkit-scrollbar-button {
    display: none;
  }

  div::-webkit-scrollbar-thumb {
    width: 1px;
    background-color: #3f1227;
    border-radius: 4px;
  }

  div::-webkit-scrollbar-corner {
    display: none;
  }

  body, input, button, select {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }

`
