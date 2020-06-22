import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assests/crwm.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon'
import CartDropDown from '../cart-dropdown/cart-dropdown'

const Header=({ currentUser,hidden })=>(
    <div className='header'>
        <Link className='logo-container' to='/'><Logo/></Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {console.log(currentUser)}
            { currentUser 
             ?
                
                <div className='option' onClick={()=> auth.signOut()}>  SIGNOUT</div>
             :  
            <Link className='option' to='/signin'>SIGNIN</Link>}
             <CartIcon/>
           
        </div>
        {/* to hide the cartDropDown */}
        {hidden?null: <CartDropDown/>} 

    </div>
)

//dont forget to pass the hidden and currenTUser to the Header component
const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
    currentUser,
    hidden
  });
  
  //OR USE THE ORIGINAL WAY
//   const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser,
//     hidden:state.cart.hidden
//   });
  

  
  export default connect(mapStateToProps)(Header);