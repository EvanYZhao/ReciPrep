import React from 'react';
import { UserAuth } from '../context/AuthContext';

const HomePage = () => {
  const { user, logOut } = UserAuth()

  const handleSignOut = async () => {
    try{
      await logOut()
    } catch (error){
      console.log(error)
    }
  }

  return (
    <div className='constraint'>
      <img className='iPhone' src={require('../assets/images/iphone14.png')} alt="iPhone"/>
      <div className='signout-wrapper'>
        <h1>Welcome {user.displayName}</h1>
        <button className="signout-button" onClick={handleSignOut}> Sign Out </button>
      </div>
    </div>
  )
}

export default HomePage
