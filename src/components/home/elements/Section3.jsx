import { Box } from '@mui/material';
import React from 'react'
import save from '../../../assets/img2.jpg';

const Section3 = () => {
    return (
      <Box sx={{mt:'3rem'}}>
            <Box component={'img'} src={save} sx={{ height: '50%', width: '100%' }} />
     </Box>
  )
}

export default Section3;
