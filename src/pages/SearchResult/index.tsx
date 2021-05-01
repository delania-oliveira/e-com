import { Sidebar } from '../../components/Sidebar'
import { Results } from '../../components/Results'
import { Container } from '../../pages/SearchResult/styles';

export default function SearchResult() {
  return (
    <Container>
        <Sidebar/>
        <Results/>
    </Container>
  )
}