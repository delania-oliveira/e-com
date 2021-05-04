import styled from 'styled-components';

export const Container = styled.div`
  background: var(--light-blue);
  max-width: 280px;
  height: 80vh;

  //Responsividade
  @media(max-width: 768px) {
    display: none;
  }
`
export const Content = styled.div`
  width: 280px;
  padding: 1rem 2rem 4rem;
  display: inline-block;
  
  h2 {
    color: var(--purple);
    font-size: 1.25rem;
    margin: 1rem 0 1.05rem;
    
  }

  p {
    color: var(--dark-purple);
    font-size: 1rem;
    margin-bottom: 0.15rem;
  }

  hr {
    border-width: 0; 
	  height: 1px;
	  border-top-width: 1px;
    border-color: var(--white);
    margin: 1rem auto;
    width: 50%;
  }
  .fas.fa-star, .far.fa-star {
    color: var(--orange)
  }
  
  .box {
    display: flex;
    align-items: center;
  }
  
  label {
    cursor: pointer;
    color: var(--dark-purple);
    transition: color 0.2s;
    margin-left: 1rem;

    &:hover {
      color: var(--purple);
    }
  }

`