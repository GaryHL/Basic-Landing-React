import React from "react";

// import {Link} from 'react-router-dom'
import {
   ContainerLinks,
   ContainerLogo,
   Nav,
   LinkNavbar,
   TextLogo,
} from "./NavbarStyled";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
   return (
      <>
         <Nav>
            <LinkNavbar to="/home">
               <ContainerLogo>
                  <img src={logo} />
                  <TextLogo>SoundWave</TextLogo>
               </ContainerLogo>
            </LinkNavbar>
            <ContainerLinks>
               <LinkNavbar to="/discover">Discover</LinkNavbar>
               <LinkNavbar to="/join">Join</LinkNavbar>
            </ContainerLinks>
         </Nav>
      </>
   );
};

export default Navbar;
