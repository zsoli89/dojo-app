import React from 'react'
import { Card, CardContent, Divider, Typography } from '@mui/material'

const MemberCardComp = () => {
  return (
    <Card sx={{ width: '98%', borderColor: 'red', borderRadius: '10px', border: 'solid', borderWidth:'0.5px', boxShadow: '5px 5px 10px #ccc', marginBottom: 0.5 }}>
            <CardContent>
                <Typography align='center' sx={{ fontSize: 20 }} gutterBottom>
                    Jakab Zoltán adatlapja
                </Typography>
                <Typography align='center' sx={{ marginBottom:3 }} variant="h5" component="div" gutterBottom>
                    {/* be{bull}nev{bull}o{bull}lent */}
                    Mátra Kempo SE
                </Typography>
                <Divider sx={{ marginBottom:3 }} />
                <Typography variant="body2" sx={{ marginBottom:1 }} align='center'>
                    Azonosító: <span style={{ fontWeight: 'bold' }} >163</span>
                    <br />
                </Typography>
                <Typography variant="body2" sx={{ marginBottom:1 }} align='center'>
                    Fokozat: <span style={{ fontWeight: 'bold' }} >8. kyu</span>
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

export default MemberCardComp