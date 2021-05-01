import { Container, Content} from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <h1>e-com</h1>
        <form action="/" method="GET">
          <input type="text" name="search" placeholder="O que você está procurando?" value="search"/>
          <button type="submit"><i className="fas fa-search"></i></button>
        </form>   
      </Content>
    </Container>
  )
}