// we use reselect memoization instead of always rerendering the state in cart-icon 


//it consists of two things one input selector that does not use createSelector and 
//output selector that uses createSelector

// import {createSelector} from 'reselect'

//input selector
//  const selectCart = state =>state.selectCart

 //output selector 
 //it takes two parameters the first is the input selector or the output selector
 //and the other is a function of what you want to do
//  export const selectCartItems=createSelector(
//      [selectCart],
//      cart=>cart.cartItems
//      )

     //another output selector that takes an output selector
     //in the second parameter we pass the reduce function from cart-icons
    //  export const selectCartItemsCount=createSelector(
    //     [selectCartItems],
    //     cartItems=>
    //     cartItems.reduce((accQuantity,cartItem)=>(
    //         accQuantity + cartItem.quantity  
    //       ),0))


          import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
   