import { Box, Container, Stack, Typography } from '@mui/material'
import styled from '@mui/material/styles/styled'
import React from 'react'
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const StyledBox = styled(Box)(() => ({
  height: {lg:'5rem',md:'15rem',sm:'17rem',xs:'27rem'},
  marginTop: '3rem',
  // backgroundColor: '#f4fcee',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black',
  marginBottom:'2rem'

}))

const Section4 = () => {
  return (
      <StyledBox>
          <Container maxWidth='md'>
              <Stack direction={{lg:'row',md:'row',sm:'column',xs:'column'}}spacing={{lg:17,md:17,sm:3,xs:3}}>
                  <Stack direction={'row'} spacing={4} xs={12} lg={6} md={6} sm={12}>
                      <Box sx={{ height: '3rem', width: '3rem' }}>
                          <TrackChangesIcon sx={{height:'4rem',width:'4rem'}} />
                      </Box>
                      <Stack spacing={1}>
                        <Typography variant='h6'><strong>WE AIM</strong></Typography>
                        <Typography variant='body2'>To provide all Treatable Deaseas Treatment on a click</Typography>
                      </Stack>
                  </Stack>
                  <Stack direction={'row'} spacing={4} xs={12} lg={6} md={6} sm={12}>
                      <Box sx={{ height: '3rem', width: '3rem' }}>
                          <TrackChangesIcon sx={{height:'4rem',width:'4rem'}} />
                      </Box>
                      <Stack spacing={1}>
                        <Typography variant='h6'><strong>WE AIM</strong></Typography>
                        <Typography variant='body2'>To provide all Treatable Deaseas Treatment on a click</Typography>
                      </Stack>
                  </Stack>
              </Stack>
          </Container>
      </StyledBox>
  )
}
export default Section4
