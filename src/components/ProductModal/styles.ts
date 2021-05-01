import styled from 'styled-components';

export const Container = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 column-gap: 10px;
 
 img { 
   max-width: 100%;
 }
 h1 {
   color: var(--orange);
   filter: brightness(0.9);
 }

 h2 {
   color: var(--dark-purple);
   margin-bottom: 1rem;
 }
 
 h3 {
   color: var(--dark-purple);
   font-size: 1rem;
   margin-bottom: 1.5rem;
 }
 p {
   color: var(--gray);
   filter: brightness(0.7);
   margin-bottom: 2rem;
 }
 
`
export const Button = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
  align-items: center;
  
  span {
    font-size: 1.25rem;
    font-weight:500;
    line-height:34px;
    text-align: center;
    cursor: pointer;
    padding: 1rem;
    border-radius: 0.25rem; 
   
  }

  .buy {
    background: var(--orange);
    color: var(--purple);
    transition: filter 0.2s;
    -webkit-transition: filter 0.2s;
    -moz-transition: filter 0.2s; 
    
    &:hover {
    filter: brightness(0.9);
   }
  }
  .cart {
    background: var(--orange);
    color: var(--purple);
    transition: 0.5s ease-in-out all;
    -webkit-transition: 0.5s ease-in-out all;
    -moz-transition: 0.5s ease-in-out all;
    
    &:hover {
      transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      font-size: 2rem;
    }
  }
  .bounce {
    animation-name: bounce;
	  animation-duration: 2s;
	  animation-iteration-count: infinite; 
	  animation-fill-mode: forwards; 
	  animation-timing-function: ease-in; 
  }

  @keyframes bounce {
    0% {transform: translateY(0px);}
    25% {transform: translateY(-5px);}
    50% {transform: translateY(0px);}
    75% {transform: translateY(-10px);}
  }

`