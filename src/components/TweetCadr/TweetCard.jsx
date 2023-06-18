import React from "react";
// { useState }

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
  NameBtn
} from "./TweetCard.styled";
import { Logo } from "components/Logo/Logo";
import { Avatar } from "../Avatar/Avatar";
import picture from "../../images/picture.png";
import decor from "images/decor.png";
import { toggleFollow } from "../../redux/operation";
import { fetchUpdateFollowers } from "../../redux/operation";
// import { selectAllTweets } from "redux/selectors";
import { useDispatch } from "react-redux";

export const TweetCard = ({ name, tweets, followers, avatar, id }) => {
 const dispatch = useDispatch();

  // const handleIncrement = evt => {
  //   const newFollowers = followers + 1;
  //   dispatch(fetchUpdateFollowers(newFollowers));
  // };
  // const handleDecrement = evt => {
  //   const newFollowers = followers - 1;
  //   dispatch(fetchUpdateFollowers(newFollowers));
  // };

  const handleToggle = () => {
    try {
      const tweets = dispatch(toggleFollow(id));
      if (!tweets) {
        return;
      }
      console.log(followers);

      const update = followers + 1;
    
      dispatch(fetchUpdateFollowers({id, update}));


    } catch (err) {
      console.log(err.message);
    }
  };

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
              <Card >{followers} FOLLOWERS</Card>
            </BoxCard>
            <BoxBtn>
              <label>
                <Button
                  type="checkbox"
                  // checked={following}
                  onChange={handleToggle}
                ></Button>
                <NameBtn>Follow</NameBtn>
              </label>
            </BoxBtn>
          </BoxUser>
        </CardWrapper>
      </Box>
    </>
  );
};
