import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assests/CART.svg'
import './cart-icon.scss'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../Redux/cart/cartAction'
import {selectCartItemsCount} from '../../Redux/cart/cart.selectors'

const CartIcon =({toggleCartHidden,itemCounter})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCounter}</span>
    </div>
)
// you have to pass the  toggleCart to the cartIcon 
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });
  //this mapStateToProps is used for the counter only
  //this way makes the react rerender every time although we dont change the currentItems
  //so we use memoization by adding Reslect 
  // const mapStateToProps =({cart:{currentItems}})=>({
  //   itemCounter:currentItems.reduce((accQuantity,cartItem)=>(
  //     accQuantity + cartItem.quantity  
  //   ),0)
  // })
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
  });
  

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)

