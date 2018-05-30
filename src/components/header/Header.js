import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='header-container'>
      <header className='header'>
        <NavLink to='/' className='nav home'>Home</NavLink>
        <NavLink to='/abc' className='nav abc'>
          <img className='image' src='https://vignette.wikia.nocookie.net/central/images/3/3b/ABC_logo.png/revision/latest?cb=20180306094342' alt='abc' />
        </NavLink>
        <NavLink to='/bbc' className='nav bbc'>
          <img className='bbc-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/BBC_World_News_red.svg/500px-BBC_World_News_red.svg.png' alt='bbc' />
        </NavLink>
        <NavLink to='/cbs' className='nav cbs'>
        <img className='image' src='http://posturemonth.org/wp-content/uploads/2018/05/cbs.png' alt='cbs' />
        </NavLink>
        <NavLink to='/cnn' className='nav cnn'>CNN</NavLink>
        <NavLink to='/washingtonpost' className='nav wp'>Washington Post</NavLink>
        <NavLink to='/fox' className='nav fox'>Fox</NavLink>
      </header>
      <input type='text' />
    </div>
  )
}
 