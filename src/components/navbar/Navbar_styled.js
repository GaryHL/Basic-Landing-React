import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items:center;
`;
export const ContainerLogo = styled.div`
   display: flex;
   align-items:center;
`;
export const ContainerLinks = styled.div`
   display: flex;
   gap: 2vh;
`;

export const TextLogo = styled.h2`
   color: white;
`;

export const LinkNavbar = styled(Link)`
   margin: 0vh 2vh;
   text-decoration:none;
   color:white;
`;
