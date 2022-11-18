import React from "react";
import { ContainerJoin, TitleJoin } from "./JoinStyled";

import Form from '../../components/form/Form'
import NavBar from '../../components/navbar/Navbar'

const Join = () => {
   return (
      <>
      <NavBar/>
      <ContainerJoin>
         <TitleJoin initial={{opacity:0,scale:0}} transition={{duration:0.5}} animate={{opacity:1,scale:1}}>
            <h2>Join The</h2>
            <h3>Fun.</h3>
         </TitleJoin>
         <Form/>
      </ContainerJoin>
      </>
   );
};

export default Join;
