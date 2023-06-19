import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
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
  const [state, setState] = useState([]);
  const [status, setStatus] = useState("follow");

  const addTweet = (select, isActive, status) => {
    setState(prev => [...prev, { select, isActive, status }]);
  };
  const deleteTweet = (select, isActive, status) => {
    setState(prev => prev.filter(tweets => tweets.status !== status));
  };
  
  useEffect(() => {
    const newTweets = localStorage.getItem("state");
    if (newTweets !== null) {
      const parsedTweets = JSON.parse(newTweets);
      setState(parsedTweets);
    } else {
      setState();
    }
  }, []);

  const handleToggle = () => {
    setStatus("following");
    setIsActive(true);
    const update = followers + 1;
    const data = { isActive: isActive, status: status, select: id };
    addTweet(data);
    dispatch(fetchUpdateFollowers({ id, update }));

    if (isActive === true) {
      const update = followers - 1;
      dispatch(fetchUpdateFollowers({ id, update }));
      setIsActive(false);
      setStatus("follow");
      const tweet = { isActive: isActive, status: status, select: id };
      deleteTweet(tweet);
    }
  };
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const value = +followers;
  const formatingValue = value.toLocaleString("en-US");

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
                <Button
                  type="checkbox"
                  name={id}
                  onChange={handleToggle}
                  status={status}
                  isActive={isActive}
                ></Button>
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

TweetCard.prototype = {
  name: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

