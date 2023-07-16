import React from 'react'
import {StyledHowOne} from '../howOne/HowOne.style';
import Checkmark from '../../../pictures/logos/Checkmark.svg';
import Golf from '../../../pictures/cars/picture12.png'
import Fixing from '../../../pictures/cars/picture14.png'

export default function HowOne() {
  return (
    <StyledHowOne>
        <div className='left-side'>
            <h3>How we work and the process we follow</h3>
            <div className='left-side-bottom'>
                <div className='left-side-ticks'>
                    <img src={Checkmark} alt="tick logo" />
                    <p>Through True Rich Attended does no end it his mother since</p>
                </div>
                <div className='left-side-ticks'>
                    <img src={Checkmark} alt="tick logo" />
                    <p>Attended does no end it his mother since real had half every</p>
                </div>
                <div className='left-side-ticks'>
                    <img src={Checkmark} alt="tick logo" />
                    <p>Since real had half every him case in packages enquire we up ecstatic</p>
                </div>
            </div>
        </div>
        <div className='right-side'>
            <img src={Golf} alt="tuned golf" />
            <img src={Fixing} alt="Fixing car" />
        </div>
    </StyledHowOne>
  )
}
