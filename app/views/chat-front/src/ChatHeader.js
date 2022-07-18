import React from 'react'
import profilePic from './img/profilePic.png'
import './ChatHeader.css'
import {MdMoreVert} from "react-icons/md";
import { IconContext } from 'react-icons';

const ChatHeader = () => {
  return (
    <div className='chat-header-grid'>
      <img src={profilePic} alt='logo' />
      <div className='chat-header-text'>
        <h1 className='user-nickname'>Fiuk Corno</h1>
        <p className='user-status'>Online</p>
      </div>
      <div className='chat-header-menu'>
        <button className='menu-more-vert'>
          <IconContext.Provider value={{ color: '#2E2E2E', size: '1.5em' }}>
            <MdMoreVert />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  )
}

export default ChatHeader