import styled from "styled-components";
import {motion} from 'framer-motion';

export const ContainerDescription = styled(motion.div)`
   width: 100%;
   display: grid;
   grid-template-columns: 80%;
   justify-content: center;
   align-items: center;

   @media (min-width: 700px) {
      grid-template-columns: 35% 25%;
      grid-gap: 3rem;
   }

   @media (min-width: 900px) {
      grid-template-columns: 30% 23%;
      grid-gap: 5rem;
   }
`;
export const ContainerDetails = styled.div`
   display: flex;
   flex-direction: column;
   color: white;
   align-self: center;
   gap: 1rem;
`;

export const ContainerImage = styled.div`
   width: 100%;
   overflow: scroll;
   overflow: hidden;
`;

export const TitleDiscover = styled.h2`
   font-size: 6vh;
`;

export const ContainerButtons = styled.div`
   display: flex;
   gap: 2rem;
`;

export const Text = styled.p`
   margin: 1rem 0rem;
   line-height: 2rem;
   font-size: 1.2rem;
`;

export const ImageCover = styled.img`
   width: 100%;
   transition:0.3s;
   cursor:pointer;
   /* transform: translateY(25%) translateX(25%); */
   /* transform: ${props => props.cover == 1 ? "translateY(25%) translateX(25%)": 0}; */
   ${props => props.cover == 0 ? "scale:1;": ""}
   ${props => props.cover == 1 ? "transform: translateY(-25%) translateX(-25%); rotate:180deg;scale:2;": ""}
   ${props => props.cover == 2 ? "transform: translateY(-25%) translateX(25%) ;scale:2;": ""} 
   ${props => props.cover == 3 ? "transform: translateY(25%) translateX(-25%);scale:2;": ""}


`;
