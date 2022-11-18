import React from "react";
import { ContainerForm } from "./formStyled";
import { AnimatePresence } from "framer-motion";

import Button from "../buttons/blueButton/BlueButton";
const Form = () => {
   return (
      <ContainerForm
         initial={{ opacity: 0, scale: 0 }}
         transition={{ duration: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
      >
         <h5>Name:</h5>
         <input></input>
         <h5>Email:</h5>
         <input></input>
         <h5>Password:</h5>
         <input></input>
         <Button text="Join Now" />
      </ContainerForm>
   );
};

export default Form;
