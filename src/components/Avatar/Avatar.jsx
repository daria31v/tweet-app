// import avatar from 'images/avatar_default.png';
import PropTypes from 'prop-types';
import React from 'react';
import {AvatarImg} from './Avatar.styled'

// eslint-disable-next-line react/prop-types
export const Avatar = ({avatar}) => {
    return (      
        <>
        <AvatarImg src={avatar} alt="avatar" ></AvatarImg>        
        </>     
    );
  };

  Avatar.prototype = {
    avatar: PropTypes.string.isRequired,
  }.isRequired;