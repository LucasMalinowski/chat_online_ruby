import React from 'react'
import profilePic from './img/profilePic.png'
import './Person.css'

const Person = () => {
  return (
    <>
      <div className='contact-containter'>
        <div className='profile-pic'>
          <img src={profilePic} alt='profile pic' />
        </div>
        <div className='contact-info'>
          <h1 className='contact-nickname'>Fulano</h1>
          <p className='contact-last-message'>Bla bla Bla</p>
        </div>
        <div className='contact-secondary-info'>
          <p className='contact-time'>18:00</p>
          <p className='contact-message-count'>14</p>
        </div>
      </div>
    </>
  )
}

export default Person