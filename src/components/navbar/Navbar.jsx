import React from "react";

// import {Link} from 'react-router-dom'
import {ContainerLinks, ContainerLogo, Nav,LinkNavbar, TextLogo} from './Navbar_styled'
import logo from "../../assets/images/logo.svg";

// styled



const Navbar = () => {
   return (
    <> 
        <Nav>
            <ContainerLogo>
                <img src={logo}/>
                <TextLogo>SoundAlgo</TextLogo>
            </ContainerLogo>
            <ContainerLinks>
                <LinkNavbar to="/discover">Discover</LinkNavbar>
                <LinkNavbar to="/join">Join</LinkNavbar>
            </ContainerLinks>

        </Nav>
    </>
   );
};

export default Navbar;
