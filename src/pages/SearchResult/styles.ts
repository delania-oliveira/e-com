import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 0;

  //Responsividade
  @media(max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr;
  }
`