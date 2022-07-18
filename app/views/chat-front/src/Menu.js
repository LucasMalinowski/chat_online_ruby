import React from 'react'
import {MdMenu, MdOutlineSearch} from 'react-icons/md'
import {IconContext} from 'react-icons'
import './Menu.scss'

const Menu = () => {
  return (
    <>
      <div class='menu-container'>
        <div className='menu-box'>
          <IconContext.Provider value={{ color: '#2E2E2E', size: '1.5em' }}>
            <MdMenu />
          </IconContext.Provider>
        </div>
        <form className='search' role='search'>
          <label className='search-label' for='search'>Pesquisar</label>
          <input className='search-input' id='search' type='search' placeholder='Pesquisar...' autofocus required />
          <button className='search-button' type='submit'>
            <IconContext.Provider value={{ color: '#2E2E2E', size: '1.5em' }}>
              <MdOutlineSearch />
            </IconContext.Provider>
          </button>
        </form>
      </div>
    </>
  )
}

export default Menu