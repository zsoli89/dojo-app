import { Box, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay, Parallax } from 'swiper';

const TestCarouselComp = () => {

	const array = ['az van hogy', 'valami csak'];

	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
			// spaceBetween={50}
			slidesPerView={1}
			effect='fade'
			autoplay={{
				delay: 5000,
				disableOnInteraction: false
			}}
			style={{
				"--swiper-navigation-color": "#fff",
				"--swiper-pagination-color": "#fff",
				paddingTop: 1
			}}
			navigation
			loop
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
		>

			{array.map((listElm) => (
				<SwiperSlide>
					<Box position={'relative'} width='100%' height='70%'>
						<img src={require('./../../images/carousel_hatterkep.jpg')} alt='as' style={{ width: '100%', height: '70%' }} />
						<Typography
							display={'flex'}
							justifyContent={'center'}
							variant='h3'
							fontWeight='bold'
							width='100%'
							sx={{ top: '400px', position: 'absolute', color: 'white', fontFamily: 'initial', right: '370px' }}
						>
							{listElm}
						</Typography>
					</Box>
				</SwiperSlide>
			))}
		</Swiper >
	)
}

export default TestCarouselComp