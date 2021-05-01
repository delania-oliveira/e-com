import { Container, Content } from './styles';
import productImg from '../../assets/product.png';

interface SingleProps {
  onOpenModalProduct: () => void;
}

export function SingleProduct({onOpenModalProduct}: SingleProps) {
  return (
    <Container>
      <Content onClick={onOpenModalProduct}>
        <img src={productImg} alt="Notebook Samsung Book X30 10ª Intel Core I5 8GB 1TB W10 15,6'' Prata"/>
        <p>Notebook Samsung Book X30 10ª Intel Core I5 8GB 1TB W10 15,6'' Prata</p>
        <h3>R$ 3.999,99</h3>
        <span>12x de R$ 333,33 sem juros no cartão de crédito</span>
      </Content>
    </Container>
  )
}