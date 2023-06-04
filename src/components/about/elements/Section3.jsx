import { Container, Grid, Typography,Box, Stack } from '@mui/material'
import React from 'react'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SpeedIcon from '@mui/icons-material/Speed';


const Section3 = () => {
    return (
      <Box sx={{backgroundColor:'#fbfbfb',mt:{lg:0,md:0,xs:'3rem',color:'black',mt:'1rem'}}}>
      <Container maxWidth='md'>
          <Grid container spacing={3} sx={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
              <Grid item xs={12}>
                  <Typography variant='h6'><strong> OUR PROMISE</strong></Typography>
              </Grid>
              <Grid item xs={12}>
                 <Grid container spacing={{lg:12,md:12,xs:1,sm:1}}>                           
                     <Grid item xs={4}>
                         <Stack alignItems={'center'} justifyContent='center' spacing={1} >
                             <Box sx={{height:'5rem',width:'100%',backgroundColor:'#7bbb43'}}><MilitaryTechIcon sx={{width:'7rem',height:'5rem'}} /></Box>
                             <Typography variant='body2'><strong>QUALITY</strong></Typography>
                             <Typography variant='body2'>Expert professionals handling your clothes with utmost care.</Typography>
                         </Stack>
                     </Grid>
                     <Grid item xs={4}>
                         <Stack alignItems={'center'} justifyContent='center' spacing={1} >
                             <Box sx={{height:'5rem',width:'100%',backgroundColor:'#7bbb43'}}><QueryStatsIcon sx={{width:'7rem',height:'5rem'}} /></Box>
                             <Typography variant='body2'><strong>TRANSPARENCY</strong></Typography>
                             <Typography variant='body2'>Neighbourhood live laundry stores offering service as you please.</Typography>
                         </Stack>
                     </Grid>
                     <Grid item xs={4}>
                         <Stack alignItems={'center'} justifyContent='center' spacing={1} >
                             <Box sx={{height:'5rem',width:'100%',backgroundColor:'#7bbb43'}}><SpeedIcon sx={{width:'7rem',height:'5rem'}} /></Box>
                             <Typography variant='body2'><strong>SPEED</strong></Typography>
                             <Typography variant='body2'>Shorter turnaround times, delivery within24 hours of pick up.</Typography>
                         </Stack>
                     </Grid>                             
                 </Grid>  
              </Grid>     
          </Grid>
            </Container>
            </Box>
  )
}

export default Section3
