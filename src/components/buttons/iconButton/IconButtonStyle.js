import styled from "styled-components";

export const ButtonContainer = styled.div`
   background-color: #0000005b;
   width: 3rem;
   border-radius: 0.2rem;
   height: 3rem;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding: 1rem;
   cursor: pointer;
   transition: 0.3s;
   &:hover {
      scale: 1.2;
      transition: 0.3s;
      background-color: #b123b1;
   }
   :focus {
      color: red;
   }
   > p {
      font-size: 1rem;
   }
   > img {
      width: 60%;
      margin: 0.5rem;
   }
`;
