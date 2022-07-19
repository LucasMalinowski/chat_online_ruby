import React from 'react'
import './SideBar.css'
import Menu from './Menu'
import People from './Contacts'

const SideBar = () => {
  return (
    <div className='sideBar-container'>
      <Menu />
      <People />
    </div>
  )
}

export default SideBar