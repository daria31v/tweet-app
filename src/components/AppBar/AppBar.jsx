import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
export const AppBar = () => {
  return (
    <header>
      <nav>
        <Link to="/" end>
          HOME
        </Link>
        <Link to="/tweets">Tweets</Link>
      </nav>
      <Link to="/" end>
        <Logo />
      </Link>
    </header>
  );
};
