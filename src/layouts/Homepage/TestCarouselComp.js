import { Box, Typography } from '@mui/material'
import React from 'react'

const TestCarouselComp = () => {
  return (
    <Box position={'relative'} width='100%' height='70%'>
        <img src={require('./../../images/carousel1.png')} alt='as' style={{ width: '100%', height: '70%' }} />
        <Typography
        variant='h3'
        fontWeight='bold'
        textAlign='end'
        width='100%'
        sx={{ position: 'absolute', top: '0px' }}
        >
            teszt szöveg 
        </Typography>
    </Box>
  )
}

export default TestCarouselComp