import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <div id="main">
        {children}
      </div>
      <Footer />
    </>
  )
}

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h3>Chats' r us</h3>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/chats">Chats</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  )
}

const Footer = () => {
  return <p>copyright 2021</p>
}
