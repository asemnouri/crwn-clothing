 const addItemToCart=(cartItems,cartItemToAdd)=>{
    const exisitingItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
      );
    if(exisitingItem){
        return cartItems.map((cartItem)=>(
            (cartItem.id ===cartItemToAdd.id)?
            {...cartItem,quantity:cartItem.quantity+1}
            : cartItem
        ))
    }
    return [...cartItems,{...cartItemToAdd, quantity :1}]
}
export default addItemToCart
