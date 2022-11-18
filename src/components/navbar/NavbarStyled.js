import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items:center;
   width:80%;
   padding: 2vh 10%;
   position:fixed;
`;
export const ContainerLogo = styled.div`
   display: flex;
   align-items:center;
   gap:1rem;
   transition:0.3s;
   >img{
      width:20%;
   }
   &:hover{
      scale: 1.05;
      transition:0.3s;
   }
   @media (min-width: 900px){
    >img{width:30%}
   }
`;
export const ContainerLinks = styled.div`
   display: flex;
   gap:1rem;
`;

export const TextLogo = styled.h2`
   color: white;
`;

export const LinkNavbar = styled(Link)`
   text-decoration:none;
   color:white;
   transition:0.3s;
   &:hover{
      scale: 1.2;
      transition:0.3s;
   }
`;
