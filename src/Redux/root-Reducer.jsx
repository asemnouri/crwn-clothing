// import { combineReducers } from 'redux';

// import userReducer from './user/user.reducer'
// import cartReducer from './cart/cart.reducer'

// export default combineReducers ({
//     user: userReducer,
//     cart: cartReducer
// })

//redux-persist
import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist'
import  storage from 'redux-persist/lib/storage'//this is local storage

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

const persistConfing ={//json object
    key:'root',
    storage,
    whitelist:["cart"] //only reducer we want is cart because the user is in firebase

}

const rootReducer=combineReducers ({
    user: userReducer,
    cart: cartReducer
})


export default persistReducer(persistConfing,rootReducer)
