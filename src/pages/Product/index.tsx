import { useEffect, useState } from 'react';
import { Container, Content, Info, ProductBox } from '../../pages/Product/styles';
import { api } from '../../services/api';


interface ProductProps {
  productId: string;
  productName: string;
  description: string;
  images: [imageURL : string];
  items: [ sellers: [
    commertialOffer: [
      Installments: [
        { NumberOfInstallments: 10; Value: number }
    ]]]];
}

export default function Product(props: ProductProps) {
  const [product, setProduct] = useState<ProductProps[]>([]);


  useEffect(()=>{
    api.get('api/catalog_system/pub/products/search/')
      .then(response => {
        setProduct(response.data.data)
        console.log(product)
    })
  } ,[])
  

  return (
    <Container>
        <Content key={props.productId}>

          <ProductBox>

          <div>
            <img src="" alt=""/>
          </div>
          
          <div className="info">
          
            <h2>{props.productName}</h2>
            <h1>R$ 3.999,99</h1>
            <h3>12x de R$ 333,33 no cartão de crédito</h3>
          
            <p>
              O Samsung Book é o notebook voltado para pessoas dinâmicas que buscam um computador que ofereça alto desempenho aliado a um design moderno...
            </p>
            <a href="#more-details">Mais Detalhes</a>

            <span className="buy bounce">Comprar</span>
          </div>
        </ProductBox>
      <Info>
        <h3 id="more-details">Informações do Produto</h3>
        <p>{props.description}</p>
      </Info>
      </Content>
    </Container>
  )
}