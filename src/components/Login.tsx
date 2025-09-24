import React, { useState } from 'react';
import API from '../services/api';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await API.post('/auth/login', { username, password });
      setToken(res.data.token);
      alert("Login successful");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Police Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
