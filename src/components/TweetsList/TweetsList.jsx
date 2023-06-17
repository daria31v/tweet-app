import React from "react";
import PropTypes from "prop-types";
import { Card, ListCards, Wrapper } from "./TweetsList.styled";
import { TweetCard } from "../TweetCadr/TweetCard";
import { useSelector } from "react-redux";
import { selectAllTweets } from "redux/selectors";

export const TweetsList = () => {
  const users = useSelector(selectAllTweets);
  // console.log(users);
  
  return (
    <Wrapper>
      <ListCards>
        {/* {users.map((user) => (
          <p>{user.user}</p>
        ))} */}
        
            {users.map(user => (
                <Card key={user.id}>
                  <TweetCard                   
                    name={user.user}
                    tweets={user.tweets}
                    followers={user.followers}
                    avatar={user.avatar}
                    id={user.id}
                    // user={user}
                  />
                </Card>
              ))}            
          </ListCards>
    </Wrapper>
    
  );
};

TweetsList.protoType = {
  tweets: PropTypes.array.isRequired
}.isRequired;
