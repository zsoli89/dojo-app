import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay, Parallax } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const CarouselComp = () => {

    /*     const slides = Array(4).fill().map((item, i) => (
            <img key={i} src={require(`./../../images/carousel${i + 1}.png`)} className="slide" />
        )); */

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
                paddingTop:1
            }}
            navigation
            loop
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <img src={require('./../../images/carousel1.png')} alt='' style={{ width: '100%', height: '600px' }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require('./../../images/carousel2.png')} alt='' style={{ width: '100%', height: '600px' }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require('./../../images/carousel3.png')} alt='' style={{ width: '100%', height: '600px' }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require('./../../images/carousel4.png')} alt='' style={{ width: '100%', height: '600px' }} />
            </SwiperSlide>
        </Swiper>
    )
}

export default CarouselComp