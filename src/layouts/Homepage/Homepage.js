import React from 'react'
import CarouselComp from './CarouselComp'
import { Container } from '@mui/material'
import BlogComp from './BlogComp'
import TestCarouselComp from './TestCarouselComp'

const Homepage = () => {
    return (
        <Container maxWidth='lg'>
            <CarouselComp />
            <TestCarouselComp />
            <BlogComp />
        </Container>

    )
}

export default Homepage