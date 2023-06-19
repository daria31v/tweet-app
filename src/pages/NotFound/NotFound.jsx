import React from 'react';
import { Title, Text, WraperImg } from './NotFound.styled';
import picture from '../../images/arrow-yellow.png'
const NotFound = () => {
    return( 
    <>
    <Title>No such page exists!</Title>
    <Text>please click on HOME</Text>
    <WraperImg>
              <img
                src={picture}
                alt="backgraund"
                width="308"
                height="100"
              ></img>
        </WraperImg>
    </>
    );
  };
  
  export default NotFound;