import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

     * {
         padding: 0;
         margin: 0;
         box-sizing: border-box;
     }

     html {
         font-size: 62.5%;
     }
    
     body {
         
     }

     button {
         cursor: pointer;
     }

     body, input, button {
        font-family: 'Roboto', sans-serif;
      } 

      img {
          width: 100%;
          height: 100%;
      }
     
`

