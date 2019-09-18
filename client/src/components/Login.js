import React, {useState, useEffect} from 'react';
import axios from 'axios';

// axios.defaults.withCredentials = true;
// const axiosWithAuth = () => {
//   return axios.create({ withCredentials: true });
// };

const initialCreds = {
  username: "",
  password: ""
};


const Login = ({ history }) => {
  const [creds, setCreds] = useState(initialCreds);
  const [error, setError] = useState(null);
  const handleChange = e => setCreds({...creds, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/auth/login', creds, {
      withCredentials: true
    })
      .then(res => {
        console.log(res);
        setCreds(initialCreds);
        history.push("/");
      })
      .catch(err => {
        console.log(err.response);
        err.response.status === 401
        setError(err.response.data.message);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <input placeholder="username"
             name="username"
             value={creds.username}
             onChange={handleChange}
      />
      <input type="password"
             placeholder="password"
             name="password"
             value={creds.password}
             onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
