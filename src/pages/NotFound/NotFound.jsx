import React from 'react';
import { Link} from 'react-router-dom'

const NotFound = () => {
    return( 
    <>
    <h2>No such page exists!</h2>
    <Link to="/">Home</Link>
    </>
    );
  };
  
  export default NotFound;