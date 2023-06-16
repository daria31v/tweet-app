import React from "react";
import PropTypes from "prop-types";
import { WrapperTweetsList } from "./TweetsList.styled";
import { TweetCard } from "../TweetCadr/TweetCard";

export const TweetsList = () => {
  return (
    <WrapperTweetsList>
      <TweetCard />
    </WrapperTweetsList>
  );
};

TweetsList.protoType = {
  tweets: PropTypes.array.isRequired,
}.isRequired;
