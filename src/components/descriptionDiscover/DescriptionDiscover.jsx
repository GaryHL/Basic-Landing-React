import React from "react";
import { useState } from "react";

import Cover from "../../assets/images/covers.jpg";
import iconMore from "../../assets/images/more.svg";
import iconMicrophone from "../../assets/images/microphone.svg";
import iconAlbums from "../../assets/images/albums.svg";
import IconButton from "../../components/buttons/iconButton/IconButton";

import {
   ContainerButtons,
   ContainerDescription,
   ContainerDetails,
   TitleDiscover,
   Text,
   ContainerImage,
   ImageCover,
} from "./DescriptionDiscoverStyled";

const DescriptionDiscover = () => {
   const [cover, setCover] = useState(0);

   return (
      <ContainerDescription
         initial={{ opacity: 0, scale: 0.5 }}
         transition={{ duration: 0.5 }}
         animate={{ opacity: 1, scale: 0.92 }}
      >
         <ContainerDetails>
            <TitleDiscover>Discover new music</TitleDiscover>
            <ContainerButtons>
               <div onClick={() => setCover(1)}>
                  <IconButton text="Charts" icon={iconMicrophone} />
               </div>
               <div onClick={() => setCover(2)}>
                  <IconButton text="Albums" icon={iconAlbums} />
               </div>
               <div onClick={() => setCover(3)}>
                  <IconButton text="More" icon={iconMore} />
               </div>
            </ContainerButtons>
            <Text>
               By joining you can benefit by listening to the lastes albums
               released.
            </Text>
         </ContainerDetails>
         <ContainerImage>
            <ImageCover src={Cover} cover={cover} onClick={() => setCover(0)} />
         </ContainerImage>
      </ContainerDescription>
   );
};

export default DescriptionDiscover;
