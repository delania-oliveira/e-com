import { Container, Content } from './styles';


interface SingleProps {
  onOpenModalProduct: () => void;
  item: resultItem;
  onClick: () => void;
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

export function SingleProduct({onOpenModalProduct, item, onClick}: SingleProps) {
  return (
    <Container onClick={onClick}>
      <Content onClick={onOpenModalProduct}>
        <img src={item.items[0].images[0].imageUrl} alt={item.productName}/>
        <p>{item.productName}</p>
        <h3>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(item.items[0].sellers[0].commertialOffer.Installments[0].Value)}</h3>
      </Content>
    </Container>
  )
}