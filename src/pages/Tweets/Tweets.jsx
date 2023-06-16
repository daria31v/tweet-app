import { Dropdown } from "../../components/Dropdown/Dropdown";
// import { useState, useEffect } from 'react';
import React from "react";
import { TweetsList } from "../../components/TweetsList/TweetsList";
// import { useSearchParams } from 'react-router-dom';
// import { getSearchMovie } from '../../Service/apiThemovieBb';
import { useLocation,  } from "react-router-dom";
import { BackLink } from "../../components/BackLink/BackLink";
import {
  Container,
  Section,
  Title,
  BoxTweets,
  LoadMore
} from "./Tweets.styled";

const Tweets = () => {
  let params = new URL(document.location).searchParams;
console.log(params);
  //   const [tweets, setTweets] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  const handleClick = () => {
    return ;
  };

  return (
    <Container>
      <Section>
        <BoxTweets>
          <BackLink to={backLinkHref} />
          <Dropdown />
          <Title>TWEETS OUR USERS</Title>
        </BoxTweets>

        <TweetsList />
        <LoadMore type="button" id="load_more" onClick={handleClick}>
          Load More
        </LoadMore>
      </Section>
    </Container>
  );
};

export default Tweets;
