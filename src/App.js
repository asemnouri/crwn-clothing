import React from 'react';
import HomePage from './components/homepage/homepage.components'
import {Route , Switch ,  BrowserRouter} from 'react-router-dom'
import ShopPage from './components/Pages/ShopPage.component'
import './App.css';
import Header from './components/header/header'
import SignInandUp from '../src/components/Pages/Sign-in-up/Sign-in-up'
import {auth , createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }
  unSubscribeFromAuth=null
componentDidMount(){
this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
  if(userAuth){
    const userRef=await createUserProfileDocument(userAuth) //userRef we got it from the config
    userRef.onSnapshot(snapshot=>{//same as onAuthStatChanged (used insted of get())
      this.setState({//storing the data in the state
        currentUser:{
          id:snapshot.id,//we use it to get the id because it doesnt exist in the data()
          ...snapshot.data()
        }
      },()=>{console.log(this.state)})
      
    });
  }
  else{
    this.setState({currentUser:userAuth})//returns null always
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
     <Route  path='/signin' component={SignInandUp}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
