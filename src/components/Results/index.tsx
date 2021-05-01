import { SingleProduct } from '../SingleProduct';
import { Container, Content } from './styles';

export function Results() {
  return (
    <Container>
      <Content>
        <span>1-48 de mais de 8.000 resultados para <strong>"notebook samsung"</strong></span>
        <hr/>
        <SingleProduct/>
      </Content>
    </Container>
  )
}