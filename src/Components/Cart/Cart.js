import React from 'react';

const Cart = (props) => {
    const carts = props.cart;
    // const total = carts.reduce((total,prd) => total + prd.price,0);
   let total = 0;
   for(let i = 0; i < carts.length; i++){
       const product = carts[i];
       total = total + product.price;
   }
    let shipping = 0;
     if (total > 35){
        shipping= 0;
    }
    if (total >15){
        shipping=4.99;
    } 

    else if(total > 0){
        shipping = 12.99;
    }
   
  const tax = Number(total /10).toFixed(2);
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);
  const formatNumber = num => {
               const precision = num.toFixed(2);
               return Number(precision);
}
return (
        <div>
            <h4>Order Summary</h4>
            <p>Item Ordered :{props.cart.length}</p>
<h5> Total:  { formatNumber(total)}</h5>
            <h5>Shipping Cost: {shipping}</h5>
            <h5>Tax:{tax}</h5>
            <h5>
                price : {grandTotal}
            </h5>
        </div>
    );
};
export default Cart;