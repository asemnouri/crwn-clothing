import React from 'react';
import HomePage from './components/homepage/homepage.components'
import {Route , Switch ,  BrowserRouter} from 'react-router-dom'
import ShopPage from './components/Pages/ShopPage.component'
import './App.css';
import Header from './components/header/header'
import SignInandUp from '../src/components/Pages/Sign-in-up/Sign-in-up'
import {auth} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }
  unSubscribeFromAuth=null
componentDidMount(){
this.unSubscribeFromAuth=auth.onAuthStateChanged(user=>{
  this.setState({currentUser:user})
})
}
componentWillUnmount(){
  this.unSubscribeFromAuth()
}
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
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
