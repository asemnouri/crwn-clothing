import cartActionTypes from './cartTypes'
import addItemToCart from './cart.utils'


const INITIAL_STATE={
    hidden:true,
    currentItem:[]
}

const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
            
        case cartActionTypes.ADD_ITEM:
            return{
                ...state,
               currentItem:addItemToCart(state.currentItem,action.payload)
            }
            

            default:return state;
    }
}
export default cartReducer;