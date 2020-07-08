import React from 'react'
import './checkout-item.scss'
import {ClearItemFromCart} from '../../redux/cart/cart.action'
import {connect} from 'react-redux'
import {addItem,removeItem}  from '../../redux/cart/cart.action'


const CheckoutItem =({cartItem,ClearItem,addItem,removeItem})=>{
    const {imageUrl,name,price,quantity} = cartItem//we did this so that we can access the cartItem
  return( <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <span className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</span>
            <span className="value">{quantity}</span>
            <span className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</span>
            </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={()=>ClearItem(cartItem)}>&#10005;</div>
    </div>)

}

const mapDispatchToProps = dispatch => ({
    ClearItem: item => dispatch(ClearItemFromCart(item)),
    addItem:item => dispatch(addItem(item)),
    removeItem:item => dispatch(removeItem(item))

  })

export default connect(null,mapDispatchToProps)(CheckoutItem);