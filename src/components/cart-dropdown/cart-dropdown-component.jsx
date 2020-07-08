import React from 'react'
import {connect} from 'react-redux'

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItem} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.action';

//We need a HOC inorder for the click button to work
//this HOC is withRouter so that we push it to redirect us to checkout page
const CartDropDown = ({cartItem,history,dispatch}) => (
    
    <div className='cart-dropdown'> 
        <div className='cart-items'>
           {
               cartItem.length?
           cartItem.map(cartItem => (
               <CartItem key={cartItem.id} item={cartItem}/>
           ))
           :<span className='empty-cart'>Your cart is empty</span>
        }
        </div>
        <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());//when trigered it removes the cartDropdown in the checkout (when you click the button)
      }}>GO TO CHECK OUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItem : selectCartItem
})
//you have access to dipatch in otherProps(when it is not passed as parameter),
// so you dont have to write it again and can be used in pther props
export default withRouter(connect(mapStateToProps)(CartDropDown));
//the order of the HOC is very important because we need the info from connect to use withRouter after that 
//or use the ninja way of connect two HOC
