import React from 'react'
import { Button, Grid } from '@mui/material'
import DojoDrawer from './DojoDrawer';
import CarouselComp from '../Homepage/CarouselComp';
import { DojoCardComp } from './DojoCardComp';

const DojoLayout = () => {
    return (
        <Grid sx={{ placeItems: 'top' }} container spacing={1}>
            <Grid item xs={2} sx={{ paddingTop: 0 }}>
                <DojoCardComp />
                <DojoDrawer />
            </Grid>
            <Grid item xs={7}>
                <Button fullWidth sx={{ bgcolor: 'purple' }}></Button>
                <CarouselComp />
            </Grid>
            <Grid item xs={3}>
                <Button fullWidth sx={{ bgcolor: 'purple' }}></Button>
            </Grid>
        </Grid>
    )
}

export default DojoLayout