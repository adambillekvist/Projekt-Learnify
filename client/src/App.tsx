import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import 'antd/dist/antd.min.css';
import Categories from './components/Categories';
import CategoryPage from './pages/CategoryPage';
import DescriptionPage from './pages/DescriptionPage';
import BasketPage from './pages/BasketPage';
import { useStoreContext } from './context/StoreContext';
import agent from './actions/agent';

function App() {

  const { setBasket } = useStoreContext();

  function getCookie(name: string) {
    return (
      document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() ||
      ''
    );
  }

  useEffect(() => {
    const clientId = getCookie('clientId');
    if (clientId) {
      agent.Baskets.get()
        .then((basket) => setBasket(basket))
        .catch((error) => console.log(error));
    }
  }, [setBasket]);
  return (
    <>
    <Navigation/>
    <Route exact path="/" component={Categories} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/category/:id" component={CategoryPage} />
        <Route exact path="/course/:id" component={DescriptionPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/detail" component={DetailPage} />
        <Route exact path="/basket" component={BasketPage} />
      </Switch>
    </>
  );
}

export default App;