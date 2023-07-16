import React from "react";
import StyledButton from "./Button.style";

function MyButton(props) {
    return (
    
        <StyledButton>{props.title}</StyledButton>

    );
  }

  export default MyButton;