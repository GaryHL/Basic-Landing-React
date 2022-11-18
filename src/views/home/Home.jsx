import React from "react";

import CtaHome from "../../components/containerCta/CtaHome";
import Navbar from "../../components/navbar/Navbar";
import { ContainerHome } from "./HomeStyled";

const Home = () => {
   return (
      <>
         <Navbar />
         <ContainerHome>
            <CtaHome />
         </ContainerHome>
      </>
   );
};

export default Home;
