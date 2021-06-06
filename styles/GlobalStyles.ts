// for addin global styles: createGlobalStyle
import { createGlobalStyle } from 'styled-components';
import media from 'css-in-js-media';

const GlobalStyle = createGlobalStyle`
 *{
   outline: 1px solid red;
 }
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
    --yellow: #FFFE55;
    --black: #101010;
    --grey: #272727;
    --white: #fff;
     --lightGrey: #e1e1e1;
     --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 62.5%;  
  @media only screen and (min-width: 1920px ) {
    font-size: 90%; 
    }
    ${media('>desktop')} {
      font-size: 75%; 
  }
  ${media('<=desktop', '>tablet')} {
    font-size: 60%; 

  }
  ${media('<=tablet', '>phone')} {
    font-size: 52.5%; 

  }
  ${media('<=phone')} {
    font-size: 50%; 

  } 
  }
  
body{
    background-color: var(--black);
font-family:'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 90%;
  margin: 0 auto;
}
button{
    font-weight: bold;
    font-size: 1.4rem;
    cursor: pointer;
    padding: .8rem 2rem;
    border: 5px solid   var(--yellow);
    background:var(--yellow);
     color: var(--white);
    transition: all 0.5s ease;
    border-radius: .5rem;
    
    box-shadow: rgba(243, 240, 53, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
     &:hover{
        background: var(--white);
        color: var(---yellow);
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
}

h1, h2, h3, h4, h5, h6{
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: var(--white);
}
ul,
li {
  margin: 0;
  padding: 0;
}
 
::selection {
  background-color: var(--yellow); ;
  color:var(--white);
}
h1{
    font-size: 4rem;     
}
   h3{
       font-size: 4rem;
    }
    h4{
       font-size: 2.2rem;       
    }
    a{
        font-size: 1.1rem;
        color: var(--white);
        text-decoration:none;
    }
    

`;

export default GlobalStyle;
