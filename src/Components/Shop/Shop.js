import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ProductInContext } from '../../App';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const history = useHistory()
const {product,setProduct}= useContext(ProductInContext);
const {cart,setCart} = useContext(ProductInContext);

//    const tenData = fakeData.slice(0,10);
//     const [product,setProduct] = useState(tenData);
//     const [cart,setCart] = useState([]);
    
    const handleAddProduct = (product) => {
        
        const newCart=[...cart,product];
        setCart(newCart);
    }
    const handleButton = (product) => {
      setCart(product);
      history.push("/productDetail");
    }
    return (
        <>
        <Header></Header>
        <div className="shop-container">
            <div className="product-container">
             
           {
                product.map(pd => <Product 
                    showAddToCart={true}
                    product={pd}
                     handleAddProduct ={handleAddProduct}
                     handleButton ={handleButton}
                     ></Product>)
            }
        
           </div>
            <div className="cart-container">
             <Cart cart={cart}></Cart>
            </div>
           
           
            
        </div>
        </>
    );
};

export default Shop;