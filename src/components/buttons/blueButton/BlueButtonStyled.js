import styled from "styled-components";

export const Button = styled.button`
   background-color: #5d5df1;
   color: white;
   padding: 0.8rem 0rem;
   border-radius: 0.5rem;
   border:none;
   cursor:pointer;
   width: ${props => props.size == "small" ? '9rem' : 'auto'};
   transition:0.3s;
   
   &:hover{
    scale: 1.1;
    transition:0.3s;
   }
`;
