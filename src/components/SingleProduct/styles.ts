import styled from 'styled-components';


export const Container = styled.div`
  max-width: 260px;
  display: flex;
  justify-content: center;
`
export const Content = styled.div`
  max-width: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  
  img{
    max-width: 75%;
    margin: 3rem auto; 
  }

  h3 {
    color: var(--orange);
    filter: brightness(0.9);
  }

  p {
    color: var(--dark-purple);
    font-size: 0.8rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  span {
    color: var(--purple);
    font-size: 0.8rem;
    margin-bottom: 1rem;
  } 
`