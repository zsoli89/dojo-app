import { Card, CardContent, Typography, Box } from '@mui/material'
import React from 'react'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export const DojoCardComp = () => {
    return (
        <Card sx={{ width: '100%', border: 'solid', borderColor: 'darkgray', borderRadius: '10px' }}>
            <CardContent>
                <Typography align='center' sx={{ fontSize: 20 }} gutterBottom>
                    Dojo:
                </Typography>
                <Typography align='center' sx={{ marginBottom:3 }} variant="h5" component="div" gutterBottom>
                    {/* be{bull}nev{bull}o{bull}lent */}
                    Mátra Kempo SE
                </Typography>
                <Typography variant="body2">
                    Edző: <span style={{ fontWeight: 'bold' }} >Dencinger Dávid 3. dan</span>
                    <br />
                </Typography>
                <Typography variant="body2">
                    Tagok száma: <span style={{ fontWeight: 'bold' }} >13</span>
                    <br />
                </Typography>
                <Typography variant="body2" sx={{ marginBottom:2 }} gutterBottom>
                    Web: <span style={{ fontWeight: 'bold' }} ><a href='https://google.hu'>https://matrakempose.hu</a></span>
                    <br />
                </Typography>
                <Typography align='center'>
                    {'"a benevolent smile"'}
                </Typography>

            </CardContent>
            {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
        </Card>

    )
}
