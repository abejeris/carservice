import React from 'react'
import { StyledServiceSection } from './ServicesSection.style';
import CarAlloy from '../../../pictures/cars/picture6.png'
import LogoButton from '../../atoms/LogoButton/LogoButton';
import  Diagnostics from '../../../pictures/logos/logo6.svg';
import EngineRepair from '../../../pictures/logos/logo7.svg';
import BodyWork from '../../../pictures/logos/logo10.svg';
import Batteries from '../../../pictures/logos/logo11.svg';

export default function ServicesSection() {
  return (
    <StyledServiceSection>
      <div className='service-container'>
      <div className='service-left'>
        <img src={CarAlloy} alt='car alloy wheel'/>
        <h3>Auto Diagnostics</h3>
        <p>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic. Through True Rich Attended does no end it his mother. </p>
        <p>See service details &#10230;</p>
      </div>
      <div className='service-right'>
        
        <LogoButton logo={Diagnostics} text='Auto Diagnostics'/>
        <LogoButton logo={EngineRepair} text='Engine Repair'/>
        <LogoButton logo={BodyWork} text='Body Work'/>
        <LogoButton logo={Batteries} text='Batteries'/>
        <LogoButton logo={Diagnostics} text='Car Wash'/>
        <LogoButton logo={EngineRepair} text='AC Repair'/>
      </div>
      </div>
    </StyledServiceSection>
  )
}
