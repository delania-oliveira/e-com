import Modal from "react-modal";
import { Container } from './styles';


interface modalSearchProps {
  isOpen: boolean;
  onRequestClose: () => void;
  autoCompleteResult: [
    {
      name: string; 
      href: string
    }
  ] 
}

export function AutocompleteModal({isOpen, onRequestClose, autoCompleteResult}: modalSearchProps) {

  return (
    <Modal isOpen={isOpen}   onRequestClose={onRequestClose} overlayClassName="react-modal-native-autocomplete" className="react-modal-content-autocomplete">
        
        <button type="button" onClick={onRequestClose} className="react-modal-close"> 
          <i className="fas fa-times"/>
        </button>
      <Container>
        {autoCompleteResult.map(item => {
          return (
            <li><a href={item.href}>{item.name}</a></li>
          )
          })}           
        </Container>
      </Modal>
  )
}