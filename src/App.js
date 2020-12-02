
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inventory from './Components/Inventory/Inventory';
import NoteFound from './Components/NoteFound/NoteFound';
import Review from './Components/Review/Review';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import { createContext, useState } from 'react';
import fakeData from './fakeData';
export const ProductInContext= createContext()
function App() {
 const tenData = fakeData.slice(0,10);
 const [product,setProduct] = useState(tenData);
 const [cart, setCart] = useState([])
  return (
    <ProductInContext.Provider value={{product,setProduct,cart,setCart}}>
<Router>
      <Switch>
        <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
     </Route>
     <Route path="/review">
       <Review></Review>
     </Route>
     <Route path="/productDetail">
       <ProductDetail></ProductDetail>
     </Route>
     <Route exact path="/">
       <Shop></Shop>
     </Route>
     <Route path="*">
       <NoteFound></NoteFound>
     </Route>
      </Switch>
    </Router>

    </ProductInContext.Provider>
    
    
  );
}

export default App;
