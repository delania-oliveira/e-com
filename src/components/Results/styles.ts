import styled from 'styled-components';

export const Container = styled.div`
  background: var(--white);
  margin-top:2rem;
  border-radius:0.25rem;

`
export const Content = styled.div`
  padding: 2rem 1rem;

  hr { 
    border-width: 0; 
	  height: 1px;
	  border-top-width: 1px;
    border-color: var(--white);
    margin: 1rem auto;
  }
  
  span {
    padding-top: 2rem;
    color: var(--dark-purple);
  }
  
`
export const Element = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  //Responsividade
  @media(max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`