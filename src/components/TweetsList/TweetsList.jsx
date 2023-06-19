import React from "react";
import { Card, ListCards, Wrapper } from "./TweetsList.styled";
import { TweetCard } from "../TweetCadr/TweetCard";
import { useSelector } from "react-redux";
import { selectIsLoading, selectError, selectAllTweets } from "redux/selectors";

export const TweetsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const users = useSelector(selectAllTweets);
 
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


