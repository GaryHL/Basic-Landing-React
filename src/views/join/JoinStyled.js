import styled from "styled-components";
import {motion} from 'framer-motion'

export const ContainerJoin = styled.div`
   width: 100%;
   min-height: 100vh;
   background-color:#292932;
   display:grid;
   grid-template-columns: 80%;
   grid-template-rows:40% 40%;
   grid-gap:3rem;
   justify-content: center;
   /* align-items: center; */
   @media (min-width: 900px){
    grid-template-columns:30% 30%; 
    align-items: center;
    grid-template-rows: 100%;
   }
`;

export const TitleJoin = styled(motion.div)`
   color: white;
   display:flex;
   flex-direction: column;
   align-self: flex-end;
   font-size:4rem;
   font-weight: 800;
   >h3{
      color:#b310b3
   }
   @media (min-width: 900px){
      align-self:center;
      flex-direction: row;
      gap:1rem;
   }
`;

export const AcentJoin = styled.h1`
   color: purple;
`;
