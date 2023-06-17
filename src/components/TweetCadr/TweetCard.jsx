import React, { useState } from "react";
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
  BoxName
} from "./TweetCard.styled";
// import users from "../../serves/users.json";
import { Logo } from "components/Logo/Logo";
import { Avatar } from "../Avatar/Avatar";
import picture from "../../images/picture.png";
import decor from "images/decor.png";
// import avatar from "images/avatar_default.png";
import { selectAllTweets } from "redux/selectors";
import { useSelector } from "react-redux";

export const TweetCard = () => {
  const [isFollower, setFollower] = useState(false);
  // const [followers, setFollowers] = useState();
  const users = useSelector(selectAllTweets);
  // useEffect(() => {
  //   document.p = `${users.followers} FOLLOWERS`;
  // });
//  console.log(users);
  const handleChange = () => {
    if (!isFollower) {
      setFollower(true);
    } else {
      setFollower(false);
    }
  };  

  return (
    <Container>
      {users.map(user => {
        return (
          <Box key={user.id}>
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
                  <Avatar avatar={user.avatar} />
                </BoxAvatar>
                <Decor src={decor} alt="decor" width="380" height="8"></Decor>
                <BoxName>
                  <Name>{user.user}</Name>
                </BoxName>
                <BoxCard>
                  <ul>
                    <Card>{user.tweets} TWEETS</Card>
                    <Card >
                      {user.followers} FOLLOWERS
                    </Card>
                  </ul>
                </BoxCard>
                <BoxBtn>
                  <Button id={user.id} type="button" onClick={handleChange} >
                    {isFollower ? "Following" : "Follow"}
                  </Button>
                </BoxBtn>
              </BoxUser>
            </CardWrapper>
          </Box>
        );
      })}
    </Container>
  );
};
