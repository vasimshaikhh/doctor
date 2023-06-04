import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Container, Paper } from '@mui/material'

import { useState } from 'react';
import { useEffect } from 'react';
import { useContactUsMutation } from '../../services/api';

function ContactUS() {
const [respInfo,response] = useContactUsMutation()
const [firstname,setFirstname] = useState();
const [lastname , setLastname] = useState();
const [ email, setEmail] = useState();
const [phone , setPhone] = useState();
const [message ,setMessage] =useState();

const av = JSON.stringify({firstname,lastname,email,phone,message})

const handleSubmit = async () =>{
  if(firstname && lastname && email && phone && message ){
    await respInfo(av)
  }else{
    alert("Fill the form")
  }
}

useEffect(()=>{
  if(response.isSuccess === true){
    console.log(response, 'response')
    
    if(response.data.success !==null || undefined){
      setMessage(response.data.message)
    }else{
      alert("Please Insert the valid INFO")
    }
  }
  console.log(message , 'message')
},[response.isSuccess])



    return (
      <>
      {/* <Typography gutterBottom variant="h3" align="center">
        React-ContactUS
            </Typography> */}
            <Container sx={{mt:'5rem'}}>
          <Grid container spacing={{xs:14,md:0}}>
                  <Grid item lg={6}md={6}sm={12} xs={12}>
                <Container
                maxWidth={"sm"}
                  sx={{ mt: { lg: "5rem", md: "5rem", xs: "1rem", sm: "1rem" } }}
                >

                <Paper
                    sx={{
                    backgroundColor: "#f7fafd",
                    height: {lg:"22rem",md:'22rem',xs:'20rem',sm:'20rem'},
                    width: "100%",
                    }}
                >
                    <Typography sx={{color:'#74b944', typography: { sm: "h4", xs: "h4",lg:'h3',md:'h3' } }}>
                    <strong>
                    An average human spends between 12000 hours of their adult life in Destroying their Healthy life.’.
                    </strong>
                    </Typography>
                </Paper>
                </Container>
                </Grid>
                  <Grid item lg={6}md={6}sm={12} xs={12}>
        <Card style={{ maxWidth: '100%', padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField value = {firstname || ''} onChange={(e) => setFirstname(e.target.value)}  placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField value= {lastname || ''} onChange={(e)=> setLastname(e.target.value)} placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField value= {email || ''} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField value= {phone || ''} onChange={(e)=> setPhone(e.target.value)} type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField value= {message || ''} onChange={(e)=> setMessage(e.target.value)} label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button onClick={handleSubmit} type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
        
                </Grid>
                </Grid>
                </Container>
            </>
  );
}

export default ContactUS;