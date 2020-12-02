import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductInContext } from '../../App';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    // const {productkey} = useParams();
    const {cart} = useContext(ProductInContext);
    console.log(cart);
    // const product = fakeData.find(pd => pd.key === productkey);
    return (
        <div>
          
            <Product showAddToCart={false} product ={cart}></Product>
            {/* <h5> Name:{cart.name}</h5> */}
        </div>
    );
};

export default ProductDetail;