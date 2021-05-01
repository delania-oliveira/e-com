import styled from 'styled-components';


export const Container = styled.div`
  height: 100vh;
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
    color: var(--dark-purple);
  }
  strong { 
    color: var(--orange)
  }
  
`