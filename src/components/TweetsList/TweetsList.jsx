import React from "react";
// import PropTypes from "prop-types";
import { Card, ListCards, Wrapper } from "./TweetsList.styled";
import { TweetCard } from "../TweetCadr/TweetCard";
import { useSelector } from "react-redux";
import { selectIsLoading, selectError, selectAllTweets } from "redux/selectors";

export const TweetsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const users = useSelector(selectAllTweets);
  // console.log(users);
  // const followers = users.followers.toLocaleString()
  // console.log(error);
  return (
    <Wrapper>
      {error && !isLoading && (
        <h3>Something went wrong... ♫ ♫ ♫ Try again ♫ ♫ ♫</h3>
      )}
      <ListCards>
        {users.map(user => (
          <Card key={user.id}>
            <TweetCard
              name={user.user}
              tweets={user.tweets}
              followers={user.followers}
              avatar={user.avatar}
              id={user.id}
            />
          </Card>
        ))}
      </ListCards>
    </Wrapper>
  );
};

// TweetsList.protoType = {
//   tweets: PropTypes.array.isRequired
// }.isRequired;