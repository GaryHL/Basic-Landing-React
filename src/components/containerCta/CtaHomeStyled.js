import styled from "styled-components";
import {motion} from "framer-motion"

export const ContainerCta = styled(motion.div)`
   display: grid;
   grid-template-columns:25% 25%;
   justify-content:center;
   align-items:flex-end;
   grid-gap: 10vh;
   width:100%;
   height:100vh;
   @media (max-width: 700px){
      grid-template-columns:80%;
   }
`;

export const ContainerTextCta = styled(motion.div)`
   display: flex;
   flex-direction: column;
   // justify-content:flex-start
   align-self:center;
   
`;

export const ImageCta = styled.img`
   width: 100%;

   @media (max-width: 700px){
      display:none;
   }
`;

export const TitleCta = styled.h1`
   color: white;
   font-weight:500;
   font-size:7vh;
   margin:3vh 0vh;
`;

export const TextCta = styled.p`
   color: white;
   margin:0vh 0vh 3vh 0vh;
   line-height:1.8rem;
   letter-spacing:0.15vh;
   font-weight:500;
   font-size:1.2rem
`;
