import { Container, Content } from './styles';

export function Sidebar() {
  return (
    <Container>
      <Content>
        <h2>Categoria</h2>
          <p>Informática</p>
        <hr/>
        <h2>Tipo de produto</h2>
          <p>Notebook</p>
        <hr/>
        <h2>Avaliação</h2>
          <div className="box">
            <input type="checkbox" id="brand" name="brand"/>
            <label>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </label>
          </div>
          <div className="box">
            <input type="checkbox" id="brand" name="brand"/>
            <label>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </label>
          </div>
          <div className="box">
            <input type="checkbox" id="brand" name="brand"/>
            <label>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </label>
          </div>
          <div className="box">
            <input type="checkbox" id="brand" name="brand"/>
            <label>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </label>
          </div>
          <div className="box">
            <input type="checkbox" id="brand" name="brand"/>
            <label>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </label>
          </div>
        <hr/>
      </Content>
    </Container>
  )
}