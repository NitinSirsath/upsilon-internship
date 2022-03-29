import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
         margin: 0 ;
         box-sizing: border-box ;
    }
`;

export const Light = {
    bg : '#fafafa',
    header: '#F2ECFF',
    footer: '#FFE5F4',
    text: 'black',
    card: '#F2ECFF'
}

export const Dark = {
    bg : '#212121',
    header: '#212121',
    footer: '#212121',
    text: 'white',
    card: '#3C3E42'
}

