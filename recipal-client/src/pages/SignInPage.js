import React from 'react';
import iPhone from '../assets/images/iphone14.png';
import { GoogleButton } from 'react-google-button';
// Might need a sticky header and footer for this

export default function SignInPage() {
  return (
    <div className='constraint'>
        <img className='iPhone' src={iPhone} alt="iPhone Frame"/>
        <div className='signin-wrapper'>
          <img className='logo' src={require('../assets/images/logo.png')} alt="logo"/>
          <GoogleButton className='google-signin-button'/>
        </div>
    </div>
  )
}
