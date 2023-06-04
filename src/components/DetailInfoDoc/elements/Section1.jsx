import React, { useEffect, useState } from 'react'
import img2 from '../../../assets/img2.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box, Button, Card, Chip, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Stack, Typography } from '@mui/material'
import Section2Drawer from './Section2Drawer';
import img1 from '../../../assets/img1.jpg'
import { useParams } from 'react-router-dom';
import { useDoctorGetByidQuery } from '../../../Services/api';


const Section1 = () => {
  let { id } = useParams();

  const { data, isSuccess } = useDoctorGetByidQuery(id);
  console.log(data)
    const [clicked, setClicked] = useState(false)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
  return (
      <Container maxWidth='xl' sx={{ mt: '5rem' }} >
      <Stack spacing={3}>
        {isSuccess === true ? data.data?.map((el, i) => {
          return (            
         
          <Card>
    <Grid container spacing={3}>
        <Grid item  xs={12} >
            <Stack justifyContent={'center'} alignItems={'center'}>
            <Box component={'img'} src={el.image} sx={{height:{xs:'15rem',sm:'30rem'},width:'100%'}} />
            <Typography sx={{typography:{xs:'h6',sm:'h3'}}}> <strong>{el.name}</strong> </Typography>
            </Stack>
        </Grid>
        <Grid item  md={8} xs={12} sx={{display:'flex',justifyContent:'center'}}>
            <Container maxWidth='xl'>
            <Stack spacing={2} justifyContent={'center'} alignItems={'start'}>
                <Stack spacing={1}>
                <Chip sx={{height:'4rem',width:'110%',fontSize:'1.5rem'}} label={`${el.fullname} & ${el.typedetail}`}/>
                <Chip sx={{display:'flex',justifyContent:'start',fontSize:'1rem'}} label='By First Design in Healthty Beauty'/>
                  {clicked === true ? <Section2Drawer click='true'/> : null}
                </Stack>
                <Stack spacing={0.5} sx={{backgroundColor:'#EBEBEB'}} >
                   <Typography variant='body1'>{el.description}</Typography>
              </Stack>
               
                </Stack>
                </Container>
                
            </Grid>
            <Grid item md={4}  xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Divider orientation="vertical" flexItem sx={{ mr: '1rem',display:{md:'block',xs:'none'} }}  />
                <Stack justifyContent={'center'} alignItems={'center'}spacing={2} >
                    <Typography variant='h6'><strong>Operation Performed ({el.operation})</strong></Typography>
                    <Typography variant='h6'><strong>Skills rating ({el.skill}/50)</strong></Typography>
                </Stack>
                      </Grid>
                      <Grid item xs={12} sx={{display:'flex',justifyContent:'center',alignItems:'center',mb:'1.5rem'}}>                          
                          <Button variant='contained' onClick={handleClickOpen} size="large">Call For Appointment</Button>
                         <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
 

        <DialogTitle id="alert-dialog-title">
          {`Doctor ${el.name}'s Info`}
        </DialogTitle>
        <DialogContent>
          
          <Typography variant='h6'>Mobile no1 : <strong> {el.mob1}</strong></Typography>
          <Typography variant='h6'>Mobile no2 : <strong> {el.mob2}</strong></Typography>
          <Typography variant='h6'>email      : <strong> {el.email}</strong></Typography>
          <Typography variant='h6'>Address    : <strong> {el.address}</strong></Typography>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>done</Button>
        </DialogActions>
      </Dialog>


            </Grid>
    </Grid>
        </Card>
     )
    })  : null}
          </Stack>
   
  </Container>
  )
}

export default Section1