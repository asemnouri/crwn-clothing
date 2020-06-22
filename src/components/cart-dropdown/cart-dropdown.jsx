import React from 'react'
import './cart-dropdown.scss'
import CustomButton from '../custom-Button/custom-Button'
import {connect} from 'react-redux'
import {CartItem} from '../cart-item/cart-item'

const CartDropDown=({currentItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items' >
        {currentItems.map((item)=>(
            <CartItem className item={item} key={item.id}/>
        ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps =({cart:{currentItems}})=>({
    currentItems
  })
  //OR
// const mapStateToProps =({state})=>({
//     currentUser:state.cart.currentItems
//   })

export default connect(mapStateToProps)(CartDropDown)