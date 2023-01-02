import React from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';


// Might need a sticky header and footer for this

const SignInPage = () => {

  const {googleSignIn} = UserAuth();

  const handleGoogleSignIn = async () => {
    try{
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='constraint'>
        <img className='iPhone' src={require('../assets/images/iphone14.png')} alt="iPhone Frame"/>
        <div className='signin-wrapper'>
          <img className='logo' src={require('../assets/images/logo.png')} alt="logo"/>
          <GoogleButton onClick={handleGoogleSignIn} className='google-signin-button'/>
        </div>
    </div>
  )
}

export default SignInPage
