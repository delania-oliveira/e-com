import { Container, Button, Description } from './styles';
import Modal from 'react-modal';


interface modalProductProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectProduct: resultItem;
}

interface resultItem {
  productId: string;
  productName: string;
  description: string;
  items: [ 
    {
    images: [{imageUrl: string}];
    sellers: [{
      commertialOffer: {
        Installments: [{
           Value: number 
        }]}}]}
  ];
}

export function ProductModal({isOpen, onRequestClose, selectProduct}: modalProductProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-native" className="react-modal-content">
      
      <button type="button" onClick={onRequestClose} className="react-modal-close"> 
        <i className="fas fa-times"/>
      </button>
      <Container>
        <div className="elementImg">
          <img src={selectProduct.items[0].images[0].imageUrl} alt={selectProduct.productName}/>
        </div>
        
        <div>
        
          <h2>{selectProduct.productName}</h2>
          <Description>
            <p>{selectProduct.description}</p>
          </Description>
          <h1>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(selectProduct.items[0].sellers[0].commertialOffer.Installments[0].Value)}</h1>
          
          <Button>
            <span className="buy">Comprar</span>
            <span className="cart bounce" onClick={onRequestClose}><i className="fas fa-cart-plus"/></span>
          </Button>
        
        </div>
      </Container>
    </Modal>
  )
}