import { Link} from 'react-router-dom'

const NotFound = () => {
    return( 
    <>
    <h1>No such page exists!</h1>
    <Link to="/">Home</Link>
    </>
    );
  };
  
  export default NotFound;