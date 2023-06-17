import React from "react";
import PropTypes from "prop-types";
import { WrapperTweetsList } from "./TweetsList.styled";
import { TweetCard } from "../TweetCadr/TweetCard";
import {selectAllTweets} from '../../redux/selectors';
import { useSelector } from "react-redux";

export const TweetsList = () => {
  const users = useSelector(selectAllTweets);


  return (
    <WrapperTweetsList>
      <TweetCard users={users}/>
    </WrapperTweetsList>
  );
};

TweetsList.protoType = {
  tweets: PropTypes.array.isRequired,
}.isRequired;
