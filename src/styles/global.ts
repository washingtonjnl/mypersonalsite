import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.main.default};
    font: 400 16px ${props => props.theme.fonts.sansSerif}, sans-serif;
  }

  input, textarea, button {
    font-family: ${props => props.theme.fonts.sansSerif}, sans-serif;
  }

  button, a {
    cursor: pointer;
  }
`
