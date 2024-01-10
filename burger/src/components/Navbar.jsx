import React from 'react'
import BurgerLogo from '../assets/burgerlogo.png'
import {NavLink} from 'react-router-dom'
import '../styles/Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
           <NavLink to={"/"}><img src={BurgerLogo}/></NavLink> 
            <div className='mainLink'>
                <NavLink to={"/"}>Anasayfa</NavLink>
                <NavLink to={"/menu"}>Menu</NavLink>
                <NavLink to={"/about"}>Hakkımızda</NavLink>
                <NavLink to={"/contact"}>İletişim</NavLink>

            </div>
        </div>
    </div> 
  )
}
