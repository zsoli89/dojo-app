import { Card, CardContent, Typography, Box, Divider } from '@mui/material'
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
        <Card sx={{ width: '98%', borderColor: 'red', borderRadius: '10px', border: 'solid', borderWidth:'1px' }}>
            <CardContent>
                <Typography align='center' sx={{ fontSize: 20 }} gutterBottom>
                    Dojo adatlapja
                </Typography>
                <Typography align='center' sx={{ marginBottom:3 }} variant="h5" component="div" gutterBottom>
                    {/* be{bull}nev{bull}o{bull}lent */}
                    Mátra Kempo SE
                </Typography>
                <Divider sx={{ marginBottom:3 }} />
                <Typography variant="body2" sx={{ marginBottom:1 }} align='center'>
                    Edző: <span style={{ fontWeight: 'bold' }} >Dencinger Dávid 3. dan</span>
                    <br />
                </Typography>
                <Typography variant="body2" sx={{ marginBottom:1 }} align='center'>
                    Tagok száma: <span style={{ fontWeight: 'bold' }} >13</span>
                    <br />
                </Typography>
                <Typography variant="body2" sx={{ marginBottom:2 }} gutterBottom align='center'>
                    Web: <span style={{ fontWeight: 'bold' }} ><a href='https://google.hu'>https://matrakempose.hu</a></span>
                    <br />
                </Typography>
                {/* <Typography align='center'>
                    {'"jer hozzánk edzeni"'}
                </Typography> */}

            </CardContent>
            {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
        </Card>

    )
}
