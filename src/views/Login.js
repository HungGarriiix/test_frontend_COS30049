import React, { useState } from "react";
import { Box, FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import APIGateway from "../components/APIGateway";

const styleCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
};

const Login = ( {LogInSuccess} ) => {
  const [user_name, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const login_response = await APIGateway.Login(user_name, password);
    if (!login_response){
      alert("Wrong password");
    }
    else{
      LogInSuccess();
    }
  };

  return (
    <Box style={styleCenter}>
      <form onSubmit={handleLogin}>
        <Typography variant="h2" gutterBottom>Login</Typography>
        <Box>
          <FormControl>
            <InputLabel htmlFor="user_name">Username</InputLabel>
            <Input
              id="user_name"
              type="text"
              value={user_name}
              onChange={handleUsernameChange}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <InputLabel htmlFor="password">Password:</InputLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </FormControl>
        </Box>
        
        <Button variant="contained" type="submit">Login</Button>
      </form>
    </Box>
  );
};

export default Login;