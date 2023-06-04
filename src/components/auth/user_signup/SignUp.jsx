import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '../../../Services/api';

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



export default function SignUp() {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [respInfo ,response] = useSignUpMutation();
  const[firstname ,setFirstname] = useState();
  const[lastname ,setLastname] = useState();
  const[email , setEmail] = useState();
  const[password , setPassword] =useState();
  const [confirmpassword , setconfirmpassword] = useState();
  const navigate = useNavigate()
  const [ide,setIde] = useState(0)

  const data = JSON.stringify({firstname,lastname,email,password,confirmpassword})

  const handleSubmit = async (e) =>{
    e.preventDefault();
    // navigate('/')
    if(firstname && lastname && email && password && confirmpassword){
      await respInfo(data)
    }else{
      alert("Fill the Form")
    }
    if(password !== confirmpassword){
      alert('sai se form fill kr ')
    }
  }
  React.useEffect(()=>{
    let working = true;

      
    if(response.isSuccess === true){
      setIde(response.data.success)
      console.log(response)
    }else{
      console.log(response)
    }
    return ()=> working = false
  },[response.isSuccess])


React.useEffect(()=>{
  let working = true;
  console.log(ide,'ide')
  if(ide>0){
    navigate('/')
  }else{
   
  }
  return ()=> working = false
},[ide])

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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField helperText={!firstname ? "FirstName is required" : " " } error={!firstname} value={ firstname || ''} onChange={(e)=> setFirstname(e.target.value)} autoComplete="given-name" name="firstName" required  fullWidth id="firstName" label="First Name" autoFocus />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField helperText={!lastname ? "LastName is required" : " " }  error={!lastname} value={lastname|| ''} onChange={(e)=> setLastname(e.target.value)} required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name"/>
              </Grid>
              <Grid item xs={12}>
                <TextField value={email|| ''}  helperText={ !validRegex.test(email) ? "inValid Email" : null} onChange={(e)=> setEmail(e.target.value)} required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField helperText={!password ?"Password is Required" :"Don't Share it with anyone"} error={!password} value={password|| ''} onChange={(e)=> setPassword(e.target.value)} required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
              </Grid>

              <Grid item xs={12}>
                <TextField helperText={!confirmpassword ?"Confrim_Password is Required" :"Don't Share it with anyone"} error={!confirmpassword} value={confirmpassword|| ''} onChange={(e)=> setconfirmpassword(e.target.value)} required fullWidth name="confirmpassword" label="confirmpassword" type="password" id="confirmpassword" autoComplete="new-password" />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button onClick={handleSubmit} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >Sign Up </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}