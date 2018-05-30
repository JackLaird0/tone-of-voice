import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeSelectedOutlet } from './../../actions/actions'

const Header = (props) => {
  return (
    <div className='header-container'>
      <header className='header'>
        <button onClick={() => { props.changeSelectedOutlet('trending') }}>
          Home
        </button>
        <button onClick={() => { props.changeSelectedOutlet('abc') }}>
          <img className='image' src='https://vignette.wikia.nocookie.net/central/images/3/3b/ABC_logo.png/revision/latest?cb=20180306094342' alt='abc' />
        </button>
        <button onClick={() => { props.changeSelectedOutlet('bbc') }}>
          <img className='bbc-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/BBC_World_News_red.svg/500px-BBC_World_News_red.svg.png' alt='bbc' />
        </button>
        <button onClick={() => { props.changeSelectedOutlet('cbs') }}>
          <img className='image' src='http://posturemonth.org/wp-content/uploads/2018/05/cbs.png' alt='cbs' />
        </button>
        <button onClick={() => { props.changeSelectedOutlet('cnn') }}>
          CNN
        </button>
        <button onClick={() => { props.changeSelectedOutlet('washPost') }}>
          Washington Post
        </button>
        <button onClick={() => { props.changeSelectedOutlet('fox') }}>
          Fox
        </button>
      </header>
      <input type='text' />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  changeSelectedOutlet: (outlet) => dispatch(changeSelectedOutlet(outlet))
})

export default connect(null, mapDispatchToProps)(Header)
