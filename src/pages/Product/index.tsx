import { useEffect, useState } from 'react';
import { Container, Content, Info, ProductBox, Description } from '../../pages/Product/styles';
import { api } from '../../services/api';



interface ProductProps {
  productId: string;
  productName: string;
  description: string;
  items: [ 
    {
    images: [{imageUrl: string}];
    sellers: [{
      commertialOffer: {
        Installments: [{
           Value: number; 
        }]}}]}
  ];
}

export default function Product() {
  const [product, setProduct] = useState<ProductProps>();


  useEffect(()=>{
    api.get('api/catalog_system/pub/products/search/')
      .then(response => {
         if(response.data) { 
            setProduct(response.data[0])
         }
    })
  } ,[])
 
  return (
    <Container>
        <Content key={product?.productId}>
        
          <ProductBox>

          <div className="elementImg">
            <img src={product?.items[0].images[0].imageUrl} alt=""/>
          </div>
          
          <div className="info">
          
            <h2>{product?.productName}</h2>
            
            {product?<h1>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(product?.items[0].sellers[0].commertialOffer.Installments[0].Value)}</h1>:<></>}
            
            <Description>
              <p>{product?.description}</p>
            </Description>
            <a href="#more-details">Mais Detalhes</a>
            
          

            <span className="buy bounce">Comprar</span>
          </div>
        </ProductBox>
      <Info>
        <h3 id="more-details">Informações do Produto</h3>
        <p>{product?.description}</p>
      </Info>
      </Content>
    </Container>
  )
}