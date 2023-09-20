import React from 'react'
import logo from '../assets/pobrane.png';
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
  )
}

export default Header