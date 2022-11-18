import React from "react";

import imageGirl from '../../assets/images/landing-page-girl.png'
import BlueButton from "../buttons/blueButton/BlueButton";
import {
   ContainerCta,
   ContainerTextCta,
   ImageCta,
   TextCta,
   TitleCta,
} from "./CtaHomeStyled";

const CtaHome = () => {
   return (
      <>
         <ContainerCta initial={{opacity:0}} transition={{duration:1.5}} animate={{opacity:1}}>
            <ImageCta src={imageGirl} />
            <ContainerTextCta initial={{opacity:0,scale:0}} transition={{duration:1}} animate={{opacity:1,scale:1}}>
               <TitleCta>Feel The Music</TitleCta>
               <TextCta>Stream over 20 thousand songs with one click</TextCta>
               <BlueButton size="small" text="Join Now"></BlueButton>
            </ContainerTextCta>
         </ContainerCta>
      </>
   );
};

export default CtaHome;
