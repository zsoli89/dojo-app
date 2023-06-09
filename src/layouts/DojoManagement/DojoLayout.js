import React, { useState } from 'react'
import { Button, Grid, List, ListItemButton, ListItemIcon, ListItemText, Divider, Box } from '@mui/material'
import { DojoCardComp } from './DojoCardComp';
import { DojoContent } from './DojoContent';
import DojoBlogComp from './DojoBlogComp';
import TestMaterialComp from './TestMaterialComp';
import DataGridComp from './DojoMemberPage/DataGridComp';

const DojoLayout = () => {

    const [blogOpen, setBlogOpen] = useState(true);
    const [baseInfoOpen, setBaseInfoOpen] = useState(false);
    const [memberOpen, setmemberOpen] = useState(false);
    const [testMaterialOpen, settestMaterialOpen] = useState(false);

    const [active, setActive] = useState(0);
    const handleClick = () => {
        setActive(!active);
    };
    const handleLeftSideClick = (setBlog, setBaseInfo, setMember, setTestMaterial, setActiveNumber) => {
        setBlogOpen(setBlog);
        setBaseInfoOpen(setBaseInfo);
        setmemberOpen(setMember);
        settestMaterialOpen(setTestMaterial);
        setActive(setActiveNumber);
    }

    return (
        <Grid sx={{ placeItems: 'top' }} container spacing={0}>
            <Grid item xs={2} sx={{ marginTop: 0.5, marginLeft: 0.5 }}>
                <DojoCardComp />
                <List sx={{ width: '100%', bgcolor: 'white' }}
                    component="nav">
                    <ListItemButton onClick={() =>
                        handleLeftSideClick(true, false, false, false, 0)
                    }
                        style={{ backgroundColor: active === 0 ? 'lightgray' : 'white' }} >
                        <ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Blog</ListItemText>
                        </ListItemIcon>
                    </ListItemButton >
                    <Divider />

                    <ListItemButton onClick={() =>
                        handleLeftSideClick(false, true, false, false, 1)
                    }
                        style={{ backgroundColor: active === 1 ? 'lightgray' : 'white' }} >
                        <ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Alapadatok</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <Divider />

                    <ListItemButton onClick={() =>
                        handleLeftSideClick(false, false, true, false, 2)
                    }
                        style={{ backgroundColor: active === 2 ? 'lightgray' : 'white' }} >
                        <ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Tagok</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <Divider />

                    <ListItemButton onClick={() =>
                        handleLeftSideClick(false, false, false, true, 3)
                    }
                        style={{ backgroundColor: active === 3 ? 'lightgray' : 'white' }}>
                        <ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Vizsgaanyag</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Grid>
            {/*sx={{ marginTop: 0.5, bgcolor: 'rgba(243, 236, 250, 0.8)', height: '650px' }} */}
            <Grid item xs={9.8} >
                {blogOpen && <DojoBlogComp />}
                {baseInfoOpen && <DojoContent />}
                {memberOpen && <DataGridComp />}
                {testMaterialOpen && <TestMaterialComp />}
            </Grid>
            {/*             <Grid item xs={1.5} sx={{ marginTop: 0.5 }}>
                <Button fullWidth sx={{ bgcolor: 'purple' }}></Button>
            </Grid>
 */}        </Grid >
    )
}

export default DojoLayout