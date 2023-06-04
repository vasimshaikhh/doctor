import  styled  from '@mui/material/styles/styled'
import { Box, Button, Container, Grid, Stack, Typography} from '@mui/material'
import React from 'react'
import img1 from '../../../assets/img1.jpg'
import { Link } from 'react-router-dom'

const StyledBox = styled(Box)({
    background: `url(${img1})`,
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
})

const Section1 = () => {
  return (
      <>
          
        <StyledBox>
              <Container>
                  <Grid container>
                      <Grid item md={7}xs={12}>
                          <Stack direction='column'>
                              <Typography variant='h2' sx={{ color: '#fff' }}>
                                  Getting Sick is Pain Urgent Care Shoudnt be
                              </Typography>
                              <Typography variant='body2' sx={{ color: '#fff' }}>
                                 A better way to access your local  urgent care facility & a  more proactive approach to care for you & your loved on
                              </Typography>
                              <Link to='/contactus'>
                              <Button variant='contained' sx={{width:'50%',mt:'2rem'}}> Contact Us</Button>
                              </Link>
                          </Stack>
                      </Grid>
                  </Grid>
            </Container>
        </StyledBox>
      </>
  )
}

export default Section1