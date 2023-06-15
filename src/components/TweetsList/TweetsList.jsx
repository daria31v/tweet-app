import PropTypes from "prop-types";

import { TweetCard } from "../TweetCadr/TweetCard";

export const TweetsList = () => {
  // console.log(tweets);
  return (
    <TweetCard /> 
    
  );
};

TweetsList.protoType = {
  tweets: PropTypes.array.isRequired,
}.isRequired;

