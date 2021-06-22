import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body, .root {
        background-color: #9055BE;
        font-family: "Raleway";
    }

    ::-webkit-input-placeholder, input {
        font-family: "Raleway";
        color: #000000;
    }
`;

export default GlobalStyle;