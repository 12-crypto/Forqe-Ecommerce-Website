import { BrowserRouter,Switch,Route } from 'react-router-dom';

// components
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import DetailView from './components/product/DetailView.jsx';

//import { TemplateProvider } from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
  //    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/cart' component={Cart}/>
            <Route exact path='/product/:id' component={DetailView}/>          
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    // </TemplateProvider>
  );
}

export default App;
