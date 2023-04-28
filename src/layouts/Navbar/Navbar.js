import React, { useState } from 'react'
import { AppBar, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';

const linksArray = ['Kezdőlap', 'Rólunk', 'Klub manager', 'Kapcsolat'];

const Navbar = () => {

    const [value, setValue] = useState()
    return (
        <AppBar sx={{ bgcolor: 'black' }} position='sticky'>
            <Toolbar>
                <IconButton>
                    <SportsKabaddiIcon sx={{ color: 'white'}} />
                </IconButton>
                <Tabs value={value} onChange={(e, val) => setValue(val)} sx={{ ml: 'auto', textDecoration: 'none' }}>
                    {linksArray.map((link) => (
                        <Tab sx={{
                            textDecoration: 'none', ':hover': {
                                textDecoration: 'underline',
                                textUnderlineOffset: '10px'
                            }, color: 'white'
                        }}
                            key={link} label={link} />
                    ))}
                </Tabs>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;