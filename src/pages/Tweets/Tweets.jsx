/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { useSelector } from "react-redux";
import { TweetsList } from "../../components/TweetsList/TweetsList";
import { selectIsLoading, selectError } from "../../redux/selectors";
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
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  
  // const [page, setPage] = (1);
  // const [searchParams] = useSearchParams();
  // const page = searchParams.get();
  //  console.log(page);

  // const {page} = useParams();
  // const [isLoading, setIsLoading] = useState(false);
  // const [totalImage, setTotalImage] = useState(0);
  // console.log(users);

  // useEffect(() => {
  //   const handleFetchTweets = async page => {
  //     try {
        // setIsLoading(true);
        // const data = fetchAllTweets();
        // console.log(data);
        // const result = data;
        // console.log(result);
        // if (!result.length) {
        //   alert("According to the result of the request, there are no photos!");
        //   return;
        // }
        // setUsers(prevUsers =>
        //   page === 1 ? [...result] : [...prevUsers, ...result]
        // );
        // setTotalImage(data.totalHits);
      // } catch (error) {
      //   alert("💥SOMETHING WENT WRONG! TRY LATER.");
      // } finally {
        // setIsLoading(false);
    //   }
    // };
    // if (!page) {
    //   return;
    // }
  // }, []);

  // useEffect(async () => {
  //   try {
  //     const data = fetchAllTweets(page);
  //     const result = data;
  //     console.log(result);
  //     setUsers(prevUsers =>
  //       page === 1 ? [...result] : [...prevUsers, ...result]
  //     );
  //   } catch (error) {
  //     alert("💥SOMETHING WENT WRONG! TRY LATER.");
  //   }
  // }, [page]);

  // const handleLoadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  //   // console.log(setPage);
  // };

  //  const handleSubmit = ()=> {
  //   // setQuery(query);
  //   setPage(1);
  //   setUsers([]);
  // };

  return (
    <Container>
      <Section>
        <BoxTweets>
          <BackLink to={backLinkHref} />
          <Dropdown />
          <Title>TWEETS OUR USERS</Title>
        </BoxTweets>
        {isLoading && !error && (
          <h3>Please waite the request in progress...🐌</h3>
        )}
        {error && !isLoading && (
          <h3>Something went wrong... ♫ ♫ ♫ Try later ♫ ♫ ♫</h3>
        )}
        <TweetsList/>
        <LoadMore
          type="button"
          id="load_more"
          // onClick={handleLoadMore}
        >
          Load More
        </LoadMore>
      </Section>
    </Container>
  );
};

export default Tweets;
