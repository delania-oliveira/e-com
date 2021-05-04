import styled from 'styled-components';


export const Container = styled.div`
  margin: 2rem auto;
  max-width: 1120px;
  background: var(--white);
  border-radius: 0.25rem;
`
export const Content = styled.div`
  margin:0 2rem;
  padding: 2rem 0;

 
`
export const ProductBox = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 column-gap: 10px;

  .elementImg{
    margin: auto ;

    img { 
      max-width: 100%;
    }
  }

 .info {
   display: flex;
   flex-direction: column;
  }
  h1 {
   color: var(--orange);
   filter: brightness(0.9);
   margin-bottom: 2rem;
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
 
  a {
    color: var(--purple);
    text-decoration: underline;
    margin-bottom: 4rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

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
    color: var(--dark-purple);
    transition: 0.5s ease-in-out all;
    -webkit-transition: 0.5s ease-in-out all;
    -moz-transition: 0.5s ease-in-out all;
    
    &:hover {
      transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      font-size: 2rem;
      font-weight: 600;
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

  //Responsividade
   @media(max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr;
  }

`
export const Description = styled.div`
  max-height: 115px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2rem;

  p {
    color: var(--gray);
    filter: brightness(0.7);
  }

`

export const Info = styled.div`
  margin:2rem 0;
  
  h3 {
   color: var(--purple);
   font-size: 1.2rem;
   margin-bottom: 1rem;
  }

  p {
   color: var(--gray);
   filter: brightness(0.7);
  }
 
`