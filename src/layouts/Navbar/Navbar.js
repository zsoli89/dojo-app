import React, { useState } from 'react'
import { AppBar, IconButton, Tab, Tabs, Toolbar, Typography, Grid, Box, Button, Menu, MenuItem, Divider } from '@mui/material';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import './../Navbar/local.css'

const mainMenu = [
    { key: 'home', value: 'Kezdőlap' },
    { key: 'about-us', value: 'Rólunk' },
    { key: 'contact', value: 'Kapcsolat' },
    { key: 'tagok', value: 'Tagok' }
];

const dojoSubMenu = [
    { key: 'matra', value: 'Mátra Kempo SE' },
    { key: 'kismerszaros', value: 'Kismészáros Kempo Se' },
    { key: 'vizivaros', value: 'Víziváros ZBK Kempo SE' },
    { key: 'harcoskutyak', value: 'Harcos Kutyák Kempo Se' }];

const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [value, setValue] = useState()
    return (
        <AppBar sx={{ bgcolor: 'black' }} position='sticky'>
            <Toolbar>
                <Grid sx={{ placeItems: 'center' }} container spacing={1}>
                    <Grid item xs={2}>
                        <Link to='home'>
                            <IconButton>
                                <SportsKabaddiIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Tabs
                            value={value}
                            onChange={(e, val) => setValue(val)}
                            sx={{ ml: 'auto', textDecoration: 'none', /*'button:hover': { backgroundColor: 'green' }*/ }}
                            TabIndicatorProps={{ sx: { backgroundColor: 'white' } }}
                            textColor='white'
                        >
                            {mainMenu.map((link) => (
                                <Tab
                                    LinkComponent={Link} to={`${link.key}`}
                                    sx={{
                                        textDecoration: '', ':hover': {
                                            textDecoration: 'underline',
                                            textUnderlineOffset: '10px',
                                            // bgcolor: 'red'
                                        }, color: 'white'
                                    }}
                                    key={link} label={link.value} />
                            ))}
                            <Divider variant='middle' orientation='vertical' flexItem sx={{ color: 'white', bgcolor: 'white' }} />
                            <Tab
                                sx={{
                                    color: 'white',
                                    textDecoration: 'none', ':hover': {
                                        textDecoration: 'underline',
                                        textUnderlineOffset: '10px',
                                        // bgcolor: 'red'
                                    }
                                }}
                                onClick={handleClick}
                                icon={<KeyboardArrowDownIcon />}
                                iconPosition='end' label='Dojo-management'
                            >
                            </Tab>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                {dojoSubMenu.map((link) => (
                                    <MenuItem
                                        LinkComponent={Link} to='dojo'
                                        onClick={handleClose}
                                        sx={{
                                            textDecoration: 'none', ':hover': {
                                                textDecoration: 'underline', textUnderlineOffset: '10px'
                                            }
                                        }}
                                    >
                                        <Link to='dojo' className='menu'>
                                            {link.value}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Tabs>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                        <Box display={'flex'}>
                            <Button
                                sx={{ marginLeft: 'auto', background: 'rgba(180,58,58,1)', ':hover': { bgcolor: 'grey' } }}
                                variant='contained'
                            >
                                <Link to='auth' className='loginMenu'>
                                    Bejelentkezés
                                </Link>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar >
    );
};

export default Navbar;