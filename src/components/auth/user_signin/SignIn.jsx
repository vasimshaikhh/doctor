import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useSingnInMutation } from '../../../Services/api';
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton, InputAdornment } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [respInfo ,response] = useSingnInMutation();
  const navigate = useNavigate();
  const[email , setEmail] = useState();
  const [password, setPassword] = useState();
  const [eye,setEye] = useState(false)
  const data = JSON.stringify({email,password})
  const handleSubmit = async (e) =>{
    e.preventDefault();
    // navigate('/')
    if( email && password){
      await respInfo(data)
    }else{
      alert("Fill the Form")
    }
  }

  React.useEffect(()=>{
    if(response.isSuccess === true){
      console.log(response)
      

    }
  },[response.isSuccess])




  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField value={ email || ''} onChange={(e)=> setEmail(e.target.value)} margin="normal" required fullWidth id="email" label="Email Address" name="email"
              autoComplete="email" autoFocus
              helperText={ !validRegex.test(email) ? "inValid Email" : null}
              error={!email} 
            />
            <TextField value={password || ''} onChange={(e) => setPassword(e.target.value)} margin="normal" required fullWidth name="password"
              helperText={!password >3 ?"Password is required":"Don not Share Your passwrd to anyone"} error={!password}
              label="Password"
              type={eye?"text":"password"} id="password"
              autoComplete="current-password" InputProps={{
                endAdornment: <InputAdornment position='end'>
                  <IconButton onClick={()=>setEye(!eye)}>
                    {eye? <VisibilityIcon/>:<VisibilityOffIcon/>}
                  </IconButton>
                </InputAdornment>
              }}
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button  type="submit"  fullWidth variant="contained"  sx={{ mt: 3, mb: 2 }}>Sign In </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}