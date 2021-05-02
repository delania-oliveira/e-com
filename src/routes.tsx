import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import SearchResult from './pages/SearchResult';

export const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/product' component={Product} />
        <Route path="/search-result" component={SearchResult} />
      </Switch>
    </BrowserRouter>
  );
};