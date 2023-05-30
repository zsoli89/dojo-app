import { Box, Typography } from '@mui/material'
import React from 'react'

const TestCarouselComp = () => {
	return (
		<Box position={'relative'} width='100%' height='70%'>
			<img src={require('./../../images/carousel1.png')} alt='as' style={{ width: '100%', height: '70%' }} />
			<Typography
				display={'flex'}
				justifyContent={'center'}
				variant='h3'
				fontWeight='bold'
				width='100%'
				sx={{ top: '400px', position: 'absolute', color: 'white', fontFamily: 'initial', right: '370px' }}
			>
				teszt szöveg
			</Typography>
		</Box>
	)
}

export default TestCarouselComp