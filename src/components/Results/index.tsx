import { useState } from 'react';
import { ProductModal } from '../ProductModal';
import { SingleProduct } from '../SingleProduct';
import { Container, Content, Element } from './styles';

interface ResultProps {
  results:resultItem[]
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

export function Results({results}: ResultProps) {
  const [selectProduct, setSelectProduct] = useState<resultItem>();

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
        <span>Mostrando Resultados:</span>
        <hr/>
        <Element> 
          {results?.map(item => {
            return (
              <SingleProduct onClick={()=>setSelectProduct(item)} key={item.productId} item={item} onOpenModalProduct={clickOpenModalProduct}/>
              )
            })}
          {selectProduct?<ProductModal selectProduct={selectProduct} isOpen={modalProcuctOpen} onRequestClose={clickCloseModalProduct}/>: <></>}
        </Element>
      </Content>
    </Container>
  )
}