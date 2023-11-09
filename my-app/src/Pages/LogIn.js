import React, { useState } from 'react';
import Cards from '../Fethcing/Fetching';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [users, setUsers] = useState([{username:'test',password:'test1'}]);

console.log(users)

  const handleLogin = () => {
    const userExists = users.find((user) => user.username === username && user.password === password);

    if (userExists) {
      setLoggedIn(true);
      setError('');
    } else {
      setError("Data isn't correct");
    }
  };

  const handleRegister = () => {
    if (newUsername && newPassword) {
      const newUser = { username: newUsername, password: newPassword };
      setUsers([...users, newUser]);
      setNewUsername('');
      setNewPassword('');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <div>
            <h1>Salamiii</h1>
            <Cards/>
        </div>
      ) : (
        <div>
          <form>
            <h1>Login</h1>
            {error && <p>{error}</p>}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
          <form>
            <h1>Register</h1>
            <input
              type="text"
              placeholder="New Username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button type="button" onClick={handleRegister}>
              Register
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
