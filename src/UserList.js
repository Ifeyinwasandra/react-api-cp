import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the user data!", error);
      });
  }, []);

  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default UserList;