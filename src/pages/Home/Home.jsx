// import { TweetsList } from '../../components/MoviesList/MoviesList';
// import { getTrendingMovies } from '../../Service/apiThemovieBb';
// import { useState, useEffect } from 'react';
import { Container, Section, Title, WraperImg, Text } from './Home.styled'
import picture from '../../images/picture.png';

const Home = () => {
//   const [tweets, setTweets] = useState([]);

  // useEffect(() => {
    // async function fetchTrendingMovies() {
    //   try {
    //     const dataFetch = await getTrendingMovies();
    //     setMovies(dataFetch.results);
    //   } catch {
    //     alert('💥SOMETHING WENT WRONG! TRY LATER.');
    //   }
    // }
    // fetchTrendingMovies();
  // }, []);

  return (
    <Container>
    <Section>
       <Title> Welcome </Title>
       <Text>Keep in touch</Text>
       <WraperImg>
              <img
                src={picture}
                alt="backgraund"
                width="308"
                height="168"
              ></img>
        </WraperImg>
    </Section>
     
    </Container>
  );
};

export default Home;