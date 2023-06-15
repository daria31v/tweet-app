import { Container, CardWrapper } from "./TweetCard.styled";
import users from "../../serves/users.json";
import { Logo } from "components/Logo/Logo";

export const TweetCard = () => {
  // console.log(data);
  const tweets = users;

  return (
    <Container>
      {tweets.map((tweet) => {
        return (
          <>
           
            <CardWrapper key={tweet.id}>
                 <Logo />
              <li>{tweet.user}</li>
               <li>{tweet.tweets}TWEETS</li>
              <li>{tweet.followers}ROLLOWERS</li>
              <button type="button">Click</button>
            </CardWrapper>
          </>
        );
      })}
    </Container>
  );
};
