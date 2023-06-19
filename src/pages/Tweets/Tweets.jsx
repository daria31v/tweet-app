import React, { useState } from "react";
import PropTypes from "prop-types";
import { TweetsList } from "../../components/TweetsList/TweetsList";
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
  const btn = document.getElementById("loadMore");

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

Tweets.prototype = {
  isVisibleBtn: PropTypes.bool.isRequired,
  handleLoadMore: PropTypes.func.isRequired
}.isRequired;