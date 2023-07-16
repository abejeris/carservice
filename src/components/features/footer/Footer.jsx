import React from "react"
import { StyledFooter, StyledNav } from '../footer/Footer.style';
import {ReactComponent as NavLogo} from '../../../pictures/logos/finsweetwhite.svg';
import { Link } from "react-router-dom"

export default function Footer ()  {
    return (
        <StyledFooter>
            <NavLogo/>
            <StyledNav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutUs">About Us</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </StyledNav>
            <p>@ Copyright Finsweet 2021</p>
        </StyledFooter>
    )
} 
