import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/users', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);
  return (
    <div>
      {users.map(user => <div>{JSON.stringify(user)}</div>)}
    </div>
  );
};

export default Users; 
