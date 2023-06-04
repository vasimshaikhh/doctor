import React from 'react'
import img2 from '../../../assets/img2.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box, Button, Card, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDoctorGetQuery } from '../../../services/api';


const Section1 = () => {

const {data,isSuccess } = useDoctorGetQuery()
console.log(data,'data')

  return (
      <Container maxWidth='xl' sx={{ mt: '5rem' }} >
          <Stack spacing={3}>
            {isSuccess === true ? data.data?.map((element,i)=>{
                return (
                <Card key={i}>
                    <Grid container spacing={3}>
                        <Grid item md={4} xs={12}>
                            <Stack justifyContent={'center'} alignItems={'center'}>
                            <Box component={'img'} src={element.image} sx={{height:'20rem',width:'100%'}} />
                            <Typography variant='h6'> <strong>{element.name}</strong> </Typography>
                            </Stack>
                        </Grid>
                        <Grid item md={4} xs={12} sx={{display:'flex',justifyContent:'center'}}>
                            <Stack spacing={2} justifyContent={'center'} alignItems={'start'}>
                                <Stack spacing={1}>
                                <Typography variant='h5'> <strong>{element.type}</strong></Typography>
                                <Typography variant='body2'>By First Design in Healthty Beauty</Typography>
                                </Stack>
                                <Stack spacing={0.5}>
                                   <Typography variant='body1'>{element.description}</Typography>
                                   {/* <Typography variant='body2'> 2. Lorem ipsum dolor sit amet consectetur adipisicing.</Typography>
                                   <Typography  variant='body2'>3. Lorem ipsum dolor sit amet consectetur adipisicing.</Typography>
                                   <Typography  variant='body2'>3. Lorem ipsum dolor sit amet consectetur adipisicing.</Typography>
                                   <Typography  variant='body2'>3. Lorem ipsum dolor sit amet consectetur adipisicing.</Typography> */}
                              </Stack>
                               
                                </Stack>
                                
                            </Grid>
                            <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                      <Divider orientation="vertical" flexItem sx={{ mr: '1rem',display:{md:'block',xs:'none'} }}  />
                                <Stack justifyContent={'center'} alignItems={'center'}spacing={2} >
                                    <Typography variant='h6'><strong>Operation Performed {element.operation}</strong></Typography>
                                    <Typography variant='h6'><strong>Expereince of {element.experience} years</strong></Typography>
                                    <Typography variant='h6'><strong>Skills rating {element.skill}</strong></Typography>
                                   
                                    <Stack direction={'row'} spacing={0.4} justifyContent={'center'}>
                                        <Link to={`/detailinfo/${element.id}`}>
                                            <Button variant='outlined'>Detailed Information</Button>
                                        </Link>
                                    </Stack>
                                    {/* {/ <Stack direction={'row'} spacing={0.4} justifyContent={'center'}> /}
                                   <Link to='/detailinfo'>     <Button variant='outlined'>Detailed Information</Button></Link>
                                        
                                    {/ </Stack> /} */}
                                </Stack>
                        </Grid>
                    </Grid>
                </Card>
                )
            })
         
    :null}
          </Stack>
   
  </Container>
  )
}

export default Section1