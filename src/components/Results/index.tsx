import { useState } from 'react';
import { ProductModal } from '../ProductModal';
import { SingleProduct } from '../SingleProduct';
import { Container, Content } from './styles';

export function Results() {
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
        <span>1-48 de mais de 8.000 resultados para <strong>"notebook samsung"</strong></span>
        <hr/>
        <SingleProduct onOpenModalProduct={clickOpenModalProduct}/>
        <ProductModal isOpen={modalProcuctOpen} onRequestClose={clickCloseModalProduct}/>
      </Content>
    </Container>
  )
}