import React from "react";
import { ButtonContainer } from "./IconButtonStyle";

const IconButton = (props) => {
   return (
      <ButtonContainer>
         <img src={props.icon}></img>
         <p>{props.text}</p>
      </ButtonContainer>
   );
};

export default IconButton;
