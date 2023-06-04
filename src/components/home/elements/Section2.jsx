import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid, Stack } from '@mui/material';
import laundry1 from '../../../assets/img1.jpg'
// import { Carousel } from 'react-responsive-carousel';

export default function Section2() {
    return (
        <Container>
            {/* <Carousel> */}
            <Grid container> 
                <Grid item xs={12} sx={{mt:'2.5rem'}} >
                <Box sx={{ height: '4rem',disply:'flex',justifyContent:'center',alignItems:'center' }}>
                    <Typography variant='h5' sx={{display:'flex',justifyContent:'center'}}><strong>OUR SERVICES</strong></Typography>
                </Box>
            </Grid>
               
          
                <Grid item lg={4} md={4} sm={12} xs={12}>
                <Card sx={{ maxWidth: 345 }}>
          <CardMedia
              sx={{display:'flex',justifyContent:'center',alignItems:'center'}}
        component="img"
        alt="green iguana"
        height="140"
        image={laundry1}
      />
          <CardContent >
              <Stack justifyContent='center' alignItems='center' spacing={1}>
        <Typography gutterBottom sx={{color:'#74b944'}} variant="h5" component="div">
          Dry Cleaning
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Eco Friendly | Expert Stain Removal
                  </Typography>
                  <Button size="small">Learn More</Button>
                  </Stack>
      </CardContent>
   
            </Card>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                <Card sx={{ maxWidth: 345 }}>
          <CardMedia
              sx={{display:'flex',justifyContent:'center',alignItems:'center'}}
        component="img"
        alt="green iguana"
        height="140"
        image={laundry1}
      />
          <CardContent >
              <Stack justifyContent='center' alignItems='center' spacing={1}>
        <Typography gutterBottom sx={{color:'#74b944'}} variant="h5" component="div">
          Dry Cleaning
        </Typography>
        <Typography variant="body2" color="text.secondary"> Eco Friendly | Expert Stain Removal</Typography>
                  <Button size="small">Learn More</Button>
                  </Stack>
      </CardContent>
   
            </Card>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{display:'flex',justifyContent:'center',alignItems:'center'}}
        component="img"
        alt="green iguana"
        height="140"
        image={laundry1}
      />
          <CardContent >
              <Stack justifyContent='center' alignItems='center' spacing={1}>
        <Typography gutterBottom sx={{color:'#74b944'}} variant="h5" component="div">
          Dry Cleaning
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Eco Friendly | Expert Stain Removal
                  </Typography>
                  <Button size="small">Learn More</Button>
                  </Stack>
      </CardContent>
   
            </Card>
                </Grid>

            </Grid>
        {/* </Carousel> */}
           
            </Container>
  );
}
