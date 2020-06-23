// import React from 'react'
// import './cart-dropdown.scss'
// import CustomButton from '../custom-Button/custom-Button'
// import {connect} from 'react-redux'
// import {CartItem} from '../cart-item/cart-item'
// import {selectCartItems} from '../../Redux/cart/cart.selectors'

// const CartDropDown=({currentItems})=>(
//     <div className='cart-dropdown'>
//         <div className='cart-items' >
//         {currentItems.map((item)=>(
//             <CartItem className item={item} key={item.id}/>
//         ))}
//         </div>
//         <CustomButton>GO TO CHECKOUT</CustomButton>
//     </div>
// )

// const mapStateToProps =({cart:{currentItems}})=>({
//     currentItems
//   })
  //does not work yet
// const mapStateToProps =(state)=>({
//     itemCount: selectCartItems(state)
//   })
//   OR
// const mapStateToProps =({state})=>({
//     currentUser:state.cart.currentItems
//   })

// export default connect(mapStateToProps)(CartDropDown)


import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-Button/custom-Button';
import CartItem from '../cart-item/cart-item';

import { selectCartItems } from '../../Redux/cart/cart.selectors';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);