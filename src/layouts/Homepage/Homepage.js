import React from 'react'
import CarouselComp from './CarouselComp'
import { Container } from '@mui/material'
import BlogComp from './BlogComp'

const Homepage = () => {
    return (
        <Container maxWidth='lg'>
            <CarouselComp />
            <BlogComp />
        </Container>

    )
}

export default Homepage