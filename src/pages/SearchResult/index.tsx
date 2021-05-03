import { Sidebar } from '../../components/Sidebar'
import { Results } from '../../components/Results'
import { Container } from '../../pages/SearchResult/styles';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { RouteComponentProps } from 'react-router';

interface ResultProps {
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

  interface MatchParams {
    search: string;
  }
  interface Props extends RouteComponentProps<MatchParams> {
  }

export default function SearchResult(props: Props) {
 const [results, setResults] = useState<ResultProps[]>([]);

  useEffect(()=>{
    const search = props.match.params.search
    console.log(search)
    api.get(`api/catalog_system/pub/products/search/${search?search:""}`)
      .then(response => {
         if(response.data) { 
            setResults(response.data)
          }
    })
  } ,[props])

  return (
    <Container>
        <Sidebar/>
        <Results results={results}/>
    </Container>
  )
}