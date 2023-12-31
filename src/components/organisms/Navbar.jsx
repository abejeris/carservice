
import React from 'react'
import { NavLink, NavLinkItem, NavLinks, NavbarContainer, NavbarLogo } from './Navbar.style'
import {ReactComponent as NavLogo} from '../../pictures/logos/logo19.svg'
import { ReactComponent as PhoneLogo } from '../../pictures/logos/logo2.svg'

function Navbar() {
  return (
   <NavbarContainer>
    <NavbarLogo>
        <NavLogo/>
    </NavbarLogo>
    <NavLinks>
        <NavLinkItem>
            <NavLink to='/'>Home</NavLink>
        </NavLinkItem>
        <NavLinkItem>
            <NavLink to="/aboutUs">About us</NavLink>
        </NavLinkItem>
        <NavLinkItem>
            <NavLink to="/services">Services</NavLink>
        </NavLinkItem>
        <NavLinkItem>
            <NavLink to="/blog">Blog</NavLink>
        </NavLinkItem>
        <NavLinkItem>
            <NavLink to="/contact">Contact</NavLink>
        </NavLinkItem>
        <NavLinkItem>
            <div className='line'></div>
        </NavLinkItem>
        <NavLinkItem>
            <div className='lastLi'>
                    <PhoneLogo/>
                 <div className='rightSide'>
                    <p>Road Assistance</p>
                    <h6>1800 265 24 52</h6>
                </div>
           </div>
        </NavLinkItem>
    </NavLinks> 
   </NavbarContainer>
  )
}

export default Navbar