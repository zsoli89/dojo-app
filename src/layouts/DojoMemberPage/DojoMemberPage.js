import React, { useState } from 'react'
import { Grid, List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'
import MemberCardComp from './MemberCardComp';
import PersonalData from './PersonalData';
import Address from './Address';
import Contact from './Contact';
import BeltExam from './BeltExam';

const DojoMemberPage = () => {

    const [personalDataOpen, setPersonalDataOpen] = useState(true);
    const [addressOpen, setAddressOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [beltExamOpen, setBeltExamOpen] = useState(false);

    const [active, setActive] = useState(0);
    const handleClick = () => {
        setActive(!active);
    };
    const handleLeftSideClick = (setPersonalData, setAddress, setContact, setBeltExam, setActiveNumber) => {
        setPersonalDataOpen(setPersonalData);
        setAddressOpen(setAddress);
        setContactOpen(setContact);
        setBeltExamOpen(setBeltExam);
        setActive(setActiveNumber);
    }

    return (
        <Grid sx={{ placeItems: 'top' }} container spacing={0}>
            <Grid item xs={2} sx={{ marginTop: 0.5, marginLeft: 0.5 }}>
                <MemberCardComp />
                <List sx={{ width: '100%', bgcolor: 'white' }}
                    component="nav">
                    <ListItemButton onClick={() =>
                        handleLeftSideClick(true, false, false, false, 0)
                    }
                        style={{ backgroundColor: active === 0 ? 'lightgray' : 'white' }} >
                        <ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Személyes adatok</ListItemText>
                        </ListItemIcon>
                    </ListItemButton >
                    <Divider />

                    <ListItemButton onClick={() =>
                        handleLeftSideClick(false, true, false, false, 1)
                    }
                        style={{ backgroundColor: active === 1 ? 'lightgray' : 'white' }} >
                        <ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Lakcím</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <Divider />

                    <ListItemButton onClick={() =>
                        handleLeftSideClick(false, false, true, false, 2)
                    }
                        style={{ backgroundColor: active === 2 ? 'lightgray' : 'white' }} >
                        <ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Kontakt</ListItemText>
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
            <Grid item xs={9.8} sx={{ bgcolor: 'rgba(243, 236, 250, 0.8)' }}>
                {personalDataOpen && <PersonalData />}
                {addressOpen && <Address />}
                {contactOpen && <Contact />}
                {beltExamOpen && <BeltExam />}
            </Grid>
            {/*             <Grid item xs={1.5} sx={{ marginTop: 0.5 }}>
                <Button fullWidth sx={{ bgcolor: 'purple' }}></Button>
            </Grid>
 */}        </Grid >
    )
}

export default DojoMemberPage