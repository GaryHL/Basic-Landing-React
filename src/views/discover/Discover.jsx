import React from "react";
import { ContainerDiscover } from "./DiscoverStyle";
import Navbar from "../../components/navbar/Navbar";
import DescriptionDiscover from "../../components/descriptionDiscover/DescriptionDiscover";

const Discover = () => {
   return (
      <>
         <Navbar />
         <ContainerDiscover >
            <DescriptionDiscover />
         </ContainerDiscover>
      </>
   );
};

export default Discover;
