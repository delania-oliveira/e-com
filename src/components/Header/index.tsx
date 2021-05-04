import React, { useState } from 'react';
import { Container, Content} from './styles';
import { AutocompleteModal } from '../AutocompleteModal';
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api';



export function Header() {
  const [search, setSearch] = useState<string>();
  const history = useHistory()
  const [modalProcuctOpen, setModalProductOpen] = useState(false);
  const [autoCompleteResult, setAutoCompleteResult] = useState([] as any);
  

  function handleSearch(e:React.FormEvent) {
    e.preventDefault()
    history.push(`/search-result/${search}`)
  } 

  function handleSearchInput(value:string) {
    if(value.length>3) {
      api.get(`buscaautocomplete/?productNameContains=${value}`)
      .then(response => {
         if(response.data) { 
          
            setAutoCompleteResult(response.data.itemsReturned)
            console.log(response.data.itemsReturned)
          }
    })
    }
    
    return (
      setSearch(value)
    ) 
  }
  
  function clickOpenModalProduct() {
    setModalProductOpen(true)
  }

  function clickCloseModalProduct() {
    setModalProductOpen(false)
  }

  return (
    <Container>
      <Content>
        <h1>e-com</h1>
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            name="search" 
            placeholder="O que você está procurando?" 
            value={search} onChange={e => handleSearchInput(e.target.value)}
          />
          <button type="submit"><i className="fas fa-search"></i></button>
        </form>
        
        {autoCompleteResult?<AutocompleteModal autoCompleteResult={autoCompleteResult} isOpen={modalProcuctOpen} onRequestClose={clickCloseModalProduct}/>:<></>}
      </Content>
    </Container>
  )
}