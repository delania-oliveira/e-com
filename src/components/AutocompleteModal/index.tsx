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
 

  if (autoCompleteResult?.length>3) 
    return (
      <Modal isOpen={true}   onRequestClose={onRequestClose} overlayClassName="react-modal-native-autocomplete" className="react-modal-content-autocomplete">
        <button type="button" onClick={onRequestClose} className="react-modal-close-autocomplete"> 
          <i className="fas fa-times"/>
        </button>
      <Container>
          {autoCompleteResult?<li><a href={autoCompleteResult[0].href}>{autoCompleteResult[0].name}</a></li>: <></>}           
        </Container>
      </Modal>
   ) 
   else return <></>
}