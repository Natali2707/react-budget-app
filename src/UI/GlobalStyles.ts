import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
       /* background-color: lightgray; */
    }
    h1, h3, p {
        margin: 0;
        padding: 0;
    }
    h2{
        font-size:24;
        font-weight: 700;
       line-height: 29.05px;

    }
    li{
     list-style-type: none;
    }
    input{
        :hover{
             background-color: lightgray;
        }
    }
`;
