import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assests/CART.svg'
import './cart-icon.scss'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../Redux/cart/cartAction'

const CartIcon =({toggleCartHidden})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)
// you havve to pass the  toggleCart to the cartIcon 
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });

export default connect(null,mapDispatchToProps)(CartIcon)