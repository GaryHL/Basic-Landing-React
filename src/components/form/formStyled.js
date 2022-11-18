import styled from "styled-components";
import {motion} from 'framer-motion'

export const ContainerForm = styled(motion.div)`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* height:100%; */
   padding:2rem 2rem;
   background-color: #282636;
   color: white;
   box-shadow:0rem 0rem 1rem #00000073;
   border-radius: 1rem;
   display:flex;
   flex-direction:column;
   padding:auto;
   gap:1rem;

   > input {
      border: none;
      border: 1px solid #ffffff85;
      background-color:transparent;
      color:#dddddd;
      border-radius:0.2rem;
      transition:0.5s;
      height:2rem;
      padding-left:1rem;
      &:focus{
         scale: 1.05;
         outline:none;
         transition:0.5s;

      }
      
   }
   > h5 {
      color: white;
      font-size: 1.2rem;;
      font-weight: 500;
      letter-spacing: 0.1rem;
   }
`;
