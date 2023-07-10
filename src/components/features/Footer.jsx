import React from 'react'
import {ReactComponent as FbLogo} from '../../pictures/logos/fb.svg';
import {ReactComponent as TwitterLogo} from '../../pictures/logos/twitter.svg';
import {ReactComponent as InstaLogo} from '../../pictures/logos/insta.svg';
import {ReactComponent as LinkedLogo} from '../../pictures/logos/LinkedIn.svg';
import {ReactComponent as NavLogo} from '../../pictures/logos/finsweetwhite.svg'


function Footer() {
  return (
    <>
   
    <div className='footer'>  
        <div className='footer-container'>
            <div className='footer-left-side'>
                <h3>Get in touch with us for your service</h3>
                <div className='footer-left-side-logos'>
                    <FbLogo/>
                    <TwitterLogo/>
                    <InstaLogo/>
                    <LinkedLogo/>
                </div>
            </div>
            <div className='footer-right-side'>
                <p>Help line Noumber</p>
                <p>1800 265 24 52</p>
                <p>Address</p>
                <p>NH 234   Public Square San Francisco  65368</p>
                <p>We are open</p>
                <p>Monday to Friday 9:00 AM to 10:00 AM</p>
            </div>
        </div>
        </div>
    <div className='bottomBanner'>
            <NavLogo/>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                </ul>
            </nav>
      
            <p>@ Copyright Finsweet 2021</p>
    </div>
    
    </>
  )
}

export default Footer