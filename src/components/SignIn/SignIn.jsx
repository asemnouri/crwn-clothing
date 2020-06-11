import React from 'react';
import './SignIn.scss'
import FormInput from '../../components/formInput/formInput.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import CustomButton from '../../components/custom-Button/custom-Button';

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            password:'',
            email:''
        }
    }
    handleSubmit=async (event)=>{
        event.preventDefault()

        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'',password:''})
        }catch(error){
            console.log(error)
        }
        
    }

    handleChange=(e)=>{
        const {value,name}=e.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>SignIn with email an password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    label='email'
                    required 
                    handleChange={this.handleChange}/>
                   
                    <FormInput 
                    name='password' 
                    type='password'
                    label='password' 
                    handleChange={this.handleChange}
                    value={this.state.password} 
                    required />
                   <div className='buttons'>
                        <CustomButton type='submit' value='Submit Form'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn