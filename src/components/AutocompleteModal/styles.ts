import styled from 'styled-components';

export const Container = styled.ul`
  li { 
    list-style-type: none;
    font-weight: 600;
  }
  
  a {
    color: var(--purple);
    transition: color 2ms;

    &:hover {
      color: var(--orange);
    }
  }
  
`

