import React from 'react';
import './App.css';
import Login from './components/Login.js';
import Users from './components/Users.js';
import { Route, NavLink } from 'react-router-dom';

function App() {
  // const [authed, setAuthed] = useState(true);
  // useEffect(() => {
  //   axios.get('/isAuthed')
  //     .then(() => setAuthed(true))
  //     .catch(err => {
  //       if (err.response.status === 401) {
  //         setAuthed(false);
  //       }
  //     });
  // }, []);
  return (
    // <AuthedContext.Provider value={{authed, setAuthed}}/>
    <div className="App">
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </header>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Users} />
    </div>
  );
}

export default App;
