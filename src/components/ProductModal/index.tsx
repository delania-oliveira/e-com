import { Container, Button } from './styles';
import Modal from 'react-modal';
import productImg from '../../assets/product.png';

interface modalProductProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function ProductModal({isOpen, onRequestClose}: modalProductProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-native" className="react-modal-content">
      
      <button type="button" onClick={onRequestClose} className="react-modal-close"> 
        <i className="fas fa-times"/>
      </button>
      <Container>
        <div>
          <img src={productImg} alt=""/>
        </div>
        
        <div>
        
          <h2>Notebook Samsung Book X30 10ª Intel Core I5 8GB 1TB W10 15,6'' Prata</h2>
          <h1>R$ 3.999,99</h1>
          <h3>12x de R$ 333,33 sem juros no cartão de crédito</h3>
        
          <p>
            O Samsung Book é o notebook voltado para pessoas dinâmicas que buscam um computador que ofereça alto desempenho aliado a um design moderno...
          </p>
          
          <Button>
            <span className="buy">Comprar</span>
            <span className="cart bounce" onClick={onRequestClose}><i className="fas fa-cart-plus"/></span>
          </Button>
        
        </div>
      </Container>
    </Modal>
  )
}