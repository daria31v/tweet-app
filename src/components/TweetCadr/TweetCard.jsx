import React from "react";
// import PropTypes from "prop-types";
import {
  Container,
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
} from "./TweetCard.styled";
import users from "../../serves/users.json";
import { Logo } from "components/Logo/Logo";
import { Avatar } from "../Avatar/Avatar";
import picture from "../../images/picture.png";
import decor from "images/decor.png";
import avatar from "images/avatar_default.png";

export const TweetCard = () => {
  // console.log(data);
  const tweets = users;

  return (
    <Container>
      {tweets.map((tweet) => {
        return (
          <Box key={tweet.id}>
            <BoxLogo>
              <Logo />
            </BoxLogo>
            <ImageWraper>
              <img
                src={picture}
                alt="backgraund"
                width="308"
                height="168"
              ></img>
            </ImageWraper>
            <CardWrapper>
              <BoxUser>
                <BoxAvatar>
                  <Avatar avatar={avatar} />
                </BoxAvatar>

                <Decor src={decor} alt="decor" width="380" height="8"></Decor>
                <BoxName>
                  <Name>{tweet.user}</Name>
                </BoxName>
                <BoxCard>
                  <ul>
                    <Card>{tweet.tweets} TWEETS</Card>
                    <Card>{tweet.followers} FOLLOWERS</Card>
                  </ul>
                </BoxCard>
                <BoxBtn>
                  <Button type="button">Follow</Button>
                </BoxBtn>
              </BoxUser>
            </CardWrapper>
          </Box>
        );
      })}
    </Container>
  );
};

