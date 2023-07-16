import React from 'react'
import { StyledFooterTop, StyledFooterLeftSide, StyledFooterRightSide } from './FooterTop.style';
import {ReactComponent as FbLogo} from '../../../pictures/logos/fb.svg';
import {ReactComponent as TwitterLogo} from '../../../pictures/logos/twitter.svg';
import {ReactComponent as InstaLogo} from '../../../pictures/logos/insta.svg';
import {ReactComponent as LinkedLogo} from '../../../pictures/logos/LinkedIn.svg';


export default function FooterTop() {
  return (
    <StyledFooterTop>
      <StyledFooterLeftSide>
        <h3>Get in touch with us for your  service</h3>
        <FbLogo/>
        <TwitterLogo/>
        <InstaLogo/>
        <LinkedLogo/>
      </StyledFooterLeftSide>
      <StyledFooterRightSide>
          <p>Help line Number</p>
          <p>1800 265 24 52</p>
          <p>Address</p>
          <p>NH 234   Public Square San Francisco  65368</p>
          <p>We are open</p>
          <p>Monday to Friday 9:00 AM to 10:00 AM</p>
      </StyledFooterRightSide>

    </StyledFooterTop>
  )
}
