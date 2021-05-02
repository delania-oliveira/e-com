import Axios from 'axios';

export const api = Axios.create(
  {
    baseURL:`${'https://cors-anywhere.herokuapp.com/'}http://agenciabluefoot.vtexcommercestable.com.br/`
    }
);
