import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import SearchResult from './pages/SearchResult';

export const Routes = (): JSX.Element => {
  return (

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/product' component={Product} />
        <Route path="/search-result/:search?" component={SearchResult} />
      </Switch>
  );
};