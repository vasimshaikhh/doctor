import { Box, Button, Stack, Typography } from '@mui/material'
import  styled  from '@mui/material/styles/styled'
import React from 'react'
import laundry1 from '../../../assets/img1.jpg'


const StyledBox = styled(Box)(() => ({
    background: `url(${laundry1})`,
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
}))


const Section1 = () => {
  return (
      <>
          <StyledBox>
              <Stack justifyContent='center' alignItems='center' spacing={2}>
              <Typography variant='h3' sx={{color:'#fff'}}>
              About Us
              </Typography>
                  {/* <Button sx={{backgroundColor:'white', color:'black',width:'50%'}} >Find Out</Button> */}
                  </Stack>
        </StyledBox>
      </>
  )
}

export default Section1
