import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='header-container'>
      <header className='header'>
        <NavLink to='/' className='nav'>Home </NavLink>
        <NavLink to='/abc' className='nav'>ABC</NavLink>
        <NavLink to='/bbc' className='nav'>BBC</NavLink>
        <NavLink to='/cbs' className='nav'>CBS</NavLink>
        <NavLink to='/cnn' className='nav'>CNN</NavLink>
        <NavLink to='/washingtonpost' className='nav'>Washington Post</NavLink>
        <NavLink to='/fox' className='nav'>Fox</NavLink>
      </header>
      <input type='text' />
    </div>
  )
}
 