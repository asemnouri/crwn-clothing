import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item'

// import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItem,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import './checkoutpage.scss';

 const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
     <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
    ))
    
    }
    <div className='total'>TOTAL: ${total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal
});

 export default connect(mapStateToProps)(CheckoutPage);
 //you have access to dipatch in otherProps(when it is not passed as parameter),
// so you dont have to write it again and can be used in pther props