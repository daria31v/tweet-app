// import avatar from 'images/avatar_default.png';

import {AvatarImg} from './Avatar.styled'

export const Avatar = ({avatar}) => {
    return (      
        <>
        <AvatarImg src={avatar} alt="avatar" width="80" height="80"></AvatarImg>
        
        </>
        
     
    );
  };
