import styled from 'styled-components';


export const Container = styled.header`
  background: var(--purple);

`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 3rem 1rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    color: var(--orange);
    font-size: 3rem;
  }
  
  input {
    width: 600px;
    font-size: 1rem;
    border: 0;
    padding: 0 1rem;
    border-radius: 0.25rem 0 0 0.25rem;
    height: 3rem;
  }
  button {
    font-size: 1rem;
    color: var(--dark-purple);
    background: var(--orange);
    border: 0;
    padding: 0 2rem;
    border-radius: 0 0.25rem 0.25rem 0;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`