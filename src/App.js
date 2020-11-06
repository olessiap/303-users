import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from "./components/User";

const App = () => {
  const [ users, setUsers ] = useState( { users: []});
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isError, setIsError ] = useState(false);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const results = await axios(url);
        setUsers(results.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
 
    fetchData();
  }, []);

  return (
   <div className="app">
      {isError && <div>Sorry! something went wrong while getting users</div>}
      
      {isLoading ? (
        <div className="loading">Loading users... </div>
      ) : (
        <>
          {users.length > 0 && users.map(user => (
            <User key={user.id} user={user} />
          ))}
        </>
      )}
   </div>
  )
}

export default App;
