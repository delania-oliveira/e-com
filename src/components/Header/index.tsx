import React, { useState } from 'react';
import { Container, Content} from './styles';
import { useHistory } from 'react-router-dom';


export function Header() {
  const [search, setSearch] = useState<string>();
  const history = useHistory()
  
  function handleSearch(e:React.FormEvent) {
    e.preventDefault()
    history.push(`/search-result/${search}`)
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
            value={search} onChange={e => setSearch(e.target.value)}
          />
          <button type="submit"><i className="fas fa-search"></i></button>
        </form>   
      </Content>
    </Container>
  )
}