import React, { useState } from "react";
// import PropTypes from "prop-types";
import {
  Box,
  CardWrapper,
  BoxLogo,
  Button,
  Card,
  BoxCard,
  BoxBtn,
  BoxAvatar,
  ImageWraper,
  Decor,
  BoxUser,
  Name,
  BoxName,
  NameBtn,
  Label
} from "./TweetCard.styled";
import { Logo } from "components/Logo/Logo";
import { Avatar } from "../Avatar/Avatar";
import picture from "../../images/picture.png";
import decor from "images/decor.png";
import { fetchUpdateFollowers } from "../../redux/operation";
import { useDispatch } from "react-redux";

export const TweetCard = ({ name, tweets, followers, avatar, id }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    if (isActive === false) {
      setIsActive(true);
      const update = followers + 1;
      dispatch(fetchUpdateFollowers({ id, update }));
    }    
    if (isActive === true) {
      setIsActive(false);
      const update = followers - 1;
      dispatch(fetchUpdateFollowers({ id, update }));
    }       
  };
  const value = +followers;
  const formatingValue = value.toLocaleString('en-US');
    
  return (
    <>
      <Box>
        <BoxLogo>
          <Logo />
        </BoxLogo>
        <ImageWraper>
          <img src={picture} alt="backgraund" width="308" height="168"></img>
        </ImageWraper>

        <CardWrapper>
          <BoxUser>
            <BoxAvatar>
              <Avatar avatar={avatar} />
            </BoxAvatar>
            <Decor src={decor} alt="decor" width="380" height="8"></Decor>
            <BoxName>
              <Name>{name}</Name>
            </BoxName>
            <BoxCard>
              <Card>{tweets} TWEETS</Card>
              <Card>{formatingValue} FOLLOWERS</Card>
            </BoxCard>
            <BoxBtn>
              <Label>
                <Button type="checkbox" onChange={handleToggle}></Button>
                <NameBtn isActive={isActive}>
                  {isActive ? "Following" : "Follow"}
                </NameBtn>
              </Label>
            </BoxBtn>
          </BoxUser>
        </CardWrapper>
      </Box>
    </>
  );
};
