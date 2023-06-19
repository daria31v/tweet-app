import React from "react";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes} from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { fetchAllTweets } from "redux/operation";

const Home = lazy(() => import("./pages/Home/Home"));
const Tweets = lazy(() => import("./pages/Tweets/Tweets"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTweets());
  }, [dispatch]);

  return (
    
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />                 
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
