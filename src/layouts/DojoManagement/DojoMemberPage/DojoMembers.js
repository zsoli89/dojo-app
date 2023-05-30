import { Box, TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react'

export const DojoMembers = () => {

    const [disable, setDisable] = useState(false);

    return (
        <Box component='form' sx={{ margin: 1, textAlign: 'absolute' }} autoComplete='off'>
            <Typography variant='h4' sx={{ padding: 2 }}>Mátra Kempo SE</Typography>
            <div>
                <TextField
                    // required
                    disabled={disable ? 'disable' : ''}
                    label="Vezetéknév"
                    // defaultValue="Hello World"
                    sx={{ paddingBottom: 3 }}
                />
                <TextField
                    disabled={disable ? 'disable' : ''}
                    label="Keresztnév"
                />
            </div>
            <div>
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    //   type="password"
                    autoComplete="current-password"
                />
                <TextField
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                />
            </div>
            <Typography align='center' sx={{ paddingBottom:1, paddingTop: 3 }}>
                <Button onClick={() => setDisable(!disable)} variant='outlined'>Szerkesztés</Button>
            </Typography>
        </Box>
    )
}

export default DojoMembers;
