import React from 'react'
import {MdMenu, MdOutlineSearch} from 'react-icons/md'
import {IconContext} from 'react-icons'
import './Menu.css'

const Menu = () => {
  return (
    <>
      <div class='menu-container'>
        <button className='menu-box'>
          <IconContext.Provider value={{ color: '#2E2E2E', size: '1.875rem' }}>
            <MdMenu />
          </IconContext.Provider>
        </button>
        <form className='search-bar' role='search'>
          <input className='search-input' id='search' 
                            type='search' 
                            placeholder='Pesquisar...' 
                            autofocus required 
                            aria-label="Pesquisar pelos contatos"/>
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