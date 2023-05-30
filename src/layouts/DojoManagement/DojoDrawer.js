import React from 'react'
import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

const dojoOptions = ['Blog', 'Alapadatok', 'Tagok', 'Vizsgaanyag']

const DojoDrawer = () => {
    return (
            <List sx={{ width: '100%', bgcolor: 'white' }}
                component="nav">
                {dojoOptions.map((link, index) => (
                    <ListItemButton key={index} divider>
                        <ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>{link}</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                ))}     
            </List>
    )
}

export default DojoDrawer