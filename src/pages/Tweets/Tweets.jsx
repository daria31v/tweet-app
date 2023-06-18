/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { useSelector } from "react-redux";
import { TweetsList } from "../../components/TweetsList/TweetsList";
import { selectAllTweets } from "redux/selectors";
import { useLocation } from "react-router-dom";
import { BackLink } from "../../components/BackLink/BackLink";
import { fetchAllTweets } from "../../redux/operation";
import { useDispatch } from "react-redux";

import {
  Container,
  Section,
  Title,
  BoxTweets,
  LoadMore
} from "./Tweets.styled";

const Tweets = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  const [page, setPage] = useState(1);
  const [isVisibleBtn, setVisibleBtn] = useState(true);
  const btn = document.querySelector("#loadMore");

  const dispatch = useDispatch();
  
  dispatch(fetchAllTweets(page));
  

  const handleLoadMore = () => {
    try {
      const nextPage = setPage(prevState => prevState + 1);
      dispatch(fetchAllTweets(nextPage));
      
      if (page === 7) {
        setVisibleBtn(false);
        btn.style.display = "none";
      }
    } catch (error) {
      alert("💥SOMETHING WENT WRONG! TRY LATER.");
    }
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
        <LoadMore
          type="button"
          id="loadMore"
          visible={isVisibleBtn}
          onClick={handleLoadMore}
        >
          Load More
        </LoadMore>
      </Section>
    </Container>
  );
};

export default Tweets;
