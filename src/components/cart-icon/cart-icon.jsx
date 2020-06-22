import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assests/CART.svg'
import './cart-icon.scss'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../Redux/cart/cartAction'

const CartIcon =({toggleCartHidden,itemCounter})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCounter}</span>
    </div>
)
// you havve to pass the  toggleCart to the cartIcon 
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });
  //this mapStateToProps is used for the counter only
  //this way makes the react rerender every time although we dont change the currentItems
  //so we use memoization
  const mapStateToProps =({cart:{currentItems}})=>({
    itemCounter:currentItems.reduce((accQuantity,currentItem)=>(
      accQuantity + currentItem.quantity  
    ),0)
  })

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)