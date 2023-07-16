import React from 'react'
import { StyledHeader } from '../header/Header.style';
import FixingCar from '../../../pictures/cars/picture21.png';
import MyButton from '../../atoms/Button/Button';

export default function Header() {
  return (
    <StyledHeader>
        <div className='left-header'>
          <img src={FixingCar} alt='fixing car'></img>
        </div>
        <div className='right-header'> 
            <h1>Our services</h1>
            <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw Through True Rich Attended does  </p>
            <MyButton title='Book a Service'/>
        </div>
        
    </StyledHeader>
  )
}
