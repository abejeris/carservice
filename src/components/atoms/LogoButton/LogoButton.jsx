import React from "react";
import { StyledLogoButton } from "./LogoButton.style";




function LogoButton(props) {
    return (
      
        <StyledLogoButton>
            <img src={props.logo} alt="logo"/>
            <p>{props.text}</p>
        </StyledLogoButton>
      
    );
  }

  export default LogoButton;