import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button:focus-visible,
    a:focus-visible,
    input:focus-visible,
    select:focus-visible,
    textarea:focus-visible,
    article:focus-visible,
    div:focus-visible {
        outline: 2px solid #f90 !important;
        outline-offset: 2px !important;
    }

    h1, h2 {
        font-family: ${props => props.theme.fonts.title};
    }

    h2{
        font-size: clamp(1.125rem, 0.679rem + 1.19vw, 1.75rem);
    }

    body{
        font-family: ${props => props.theme.fonts.body};
    }
`

export default GlobalStyle;