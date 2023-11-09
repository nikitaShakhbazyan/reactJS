import React from 'react'
import {NavLink} from 'react-router-dom'
import About from "../Pages/About";
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div>
       <h1> Georgian Universities </h1>
      <div className={styles.container}>
       <NavLink className={styles.navButton} to='/'>Home</NavLink>
       <NavLink className={styles.navButton} to='/About'>About</NavLink>
       </div>
        </div>
  )
}

export default Navbar