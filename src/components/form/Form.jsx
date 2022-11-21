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
         <label>Name:</label>
         <input></input>
         <label>Email:</label>
         <input></input>
         <label>Password:</label>
         <input></input>
         <Button text="Join Now" />
      </ContainerForm>
   );
};

export default Form;
