import { Container, Content, Info, OthersProducts, ProductBox } from '../../pages/Product/styles';
import productImg from '../../assets/product.png'
import { SingleProduct } from '../../components/SingleProduct';
import { useState } from 'react';
import { ProductModal } from '../../components/ProductModal';

export default function Product() {
  const [modalProcuctOpen, setModalProductOpen] = useState(false);

  function clickOpenModalProduct() {
    setModalProductOpen(true)
  }

  function clickCloseModalProduct() {
    setModalProductOpen(false)
  }
  return (
    <Container>
      <Content>
        <ProductBox>

          <div>
            <img src={productImg} alt="Notebook Samsung Book X30 10ª Intel Core I5 8GB 1TB W10 15,6'' Prata"/>
          </div>
          
          <div className="info">
          
            <h2>Notebook Samsung Book X30 10ª Intel Core I5 8GB 1TB W10 15,6'' Prata</h2>
            <h1>R$ 3.999,99</h1>
            <h3>12x de R$ 333,33 sem juros no cartão de crédito</h3>
          
            <p>
              O Samsung Book é o notebook voltado para pessoas dinâmicas que buscam um computador que ofereça alto desempenho aliado a um design moderno...
            </p>
            <a href="#more-details">Mais Detalhes</a>

            <span className="buy bounce">Comprar</span>
          </div>
        </ProductBox>
      
      <OthersProducts>
        <h2>Você tambem pode gostar</h2>
        <div className="products">
          <SingleProduct onOpenModalProduct={clickOpenModalProduct}/>
          <SingleProduct onOpenModalProduct={clickOpenModalProduct}/>
          <SingleProduct onOpenModalProduct={clickOpenModalProduct}/>
        </div>
        <ProductModal isOpen={modalProcuctOpen} onRequestClose={clickCloseModalProduct}/> 
      </OthersProducts>
      <Info>
        <h3 id="more-details">Informações do Produto</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum.\"Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
          laborum.\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum.\"Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
          laborum.</p>
      </Info>
      </Content>
    </Container>
  )
}