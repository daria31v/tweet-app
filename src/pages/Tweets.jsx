// import { SearchBox } from '../../components/SearchBox/SearchBox';
// import { useState, useEffect } from 'react';
import { TweetsList } from '../components/TweetsList/TweetsList';
// import { useSearchParams } from 'react-router-dom';
// import { getSearchMovie } from '../../Service/apiThemovieBb';
import { useLocation } from 'react-router-dom';
import {BackLink} from '../components/BackLink/BackLink';

import users from '../serves/users.json'

const Tweets = () => {
//   const [query, setQuery] = useState('');
//   const [tweets, setTweets] = useState([]);
const location = useLocation();
const backLinkHref = location.state?.from ?? '/';
//   const [searchParams, setSearchParams] = useSearchParams();
//   const searchQuery = searchParams.get('query') ?? '';

//   useEffect(() => {
//     if (!searchQuery) {
//       return;
//     }

//     getSearchMovie(searchQuery).then(setMovies);
//   }, [searchQuery]);

//   const handleChange = evt => {
//     setQuery(evt.target.value);
//   };

//   const handleSubmitForm = evt => {
//     evt.preventDefault();
//     setSearchParams({ query });
//   };

  return (
    <>
    <BackLink to={backLinkHref}/>
      {/* <SearchBox
        value={query}
        onChange={handleChange}
        onSubmit={handleSubmitForm}
      /> */}
      <h2>TWEETS LIST</h2>
      <TweetsList tweets={users} />
    </>
  );
};

export default Tweets;