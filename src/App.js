import React from 'react';
import HomePage from './components/homepage/homepage.components'
import {Route , Switch ,  BrowserRouter, Redirect } from 'react-router-dom'
import ShopPage from './components/Pages/ShopPage.component'
import './App.css';
import Header from './components/header/header'
import SignInandUp from '../src/components/Pages/Sign-in-up/Sign-in-up'
import {auth , createUserProfileDocument} from './firebase/firebase.utils'
import {connect } from 'react-redux'
import setCurrentUser from './Redux/user/userAction'

class App extends React.Component {
  
  unSubscribeFromAuth=null
componentDidMount(){
this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
  if(userAuth){
    const userRef=await createUserProfileDocument(userAuth) //userRef we got it from the config
    userRef.onSnapshot(snapshot=>{//same as onAuthStatChanged (used insted of get())
      this.props.setCurrentUser({//storing the data in the state
        currentUser:{
          id:snapshot.id,//we use it to get the id because it doesnt exist in the data()
          ...snapshot.data()
        }
      },()=>{console.log(setCurrentUser)})
      
    });
  }
  else{
    setCurrentUser({userAuth})//returns null always
  }
  
  // createUserProfileDocument(user)
  // this.setState({currentUser:user})
})
}
//to prevent memory leaks
componentWillUnmount(){
  this.unSubscribeFromAuth()
}
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route  path='/shop' component={ShopPage}/>
     <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInandUp />
              )
            }
          />
          {/* <Route path='/signin' component={SignInandUp}/> */}

     </Switch>
    </div>
    </BrowserRouter>
  );
  }
}

const mapStateToProps =(state)=>({
  currentUser:state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
