import React, { useState } from 'react'
import { Box, FormLabel, TextField, Button, Modal, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';



const PersonalData = () => {

    // const [disable, setDisable] = useState(true);
    const [surname, setSurname] = useState('');
    const [forename, setForename] = useState('');
    const [birthPlace, setBirthPlace] = useState('');
    const [motherSurname, setMotherSurname] = useState('');
    const [motherForename, setMotherForename] = useState('');
    // const [birthDate, setBirthDate] = useState('');
    const [dateValue, setDateValue] = React.useState(dayjs('2022-04-17'));
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleClose = () => setModalOpen(false);

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const [date, setDate] = useState(new Date());

    const [inputs, setInputs] = useState({
        surname: "",
        forename: "",
        mothersurname: "",
        motherforename: "",
        birthplace: "",
        birthdate: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    }

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'white', margin: 2, borderRadius: 2, boxShadow: '5px 5px 10px #ccc' }}>

                <form>
                    <Box
                        sx={{ display: 'flex', margin: 2, padding: 2, justifyContent: 'center' }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: 0.4 }} >
                            <FormLabel>Vezetéknév</FormLabel>
                            <TextField
                                variant='outlined'
                                value={inputs.surname}
                                defaultValue={'Kovács'}
                                aria-readonly
                            />
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', width: 0.4, paddingLeft: '100px' }} >
                            <FormLabel>Keresztnév</FormLabel>
                            <TextField
                                variant='outlined'
                                sx={{ width: 'relative' }}
                                value={inputs.forename}
                                defaultValue={'Boldizsár'}
                                aria-readonly
                            />
                        </Box>
                    </Box>

                    <Box
                        sx={{ display: 'flex', margin: 2, padding: 2, justifyContent: 'center' }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: 0.4 }} >
                            <FormLabel>Anyja születési családi neve</FormLabel>
                            <TextField
                                variant='outlined'
                                value={inputs.mothersurname}
                                aria-readonly
                            />
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', width: 0.4, paddingLeft: '100px' }} >
                            <FormLabel>Anyja születési keresztneve</FormLabel>
                            <TextField
                                variant='outlined'
                                sx={{ width: 'relative' }}
                                value={inputs.motherforename}
                                aria-readonly
                            />
                        </Box>
                    </Box>

                    <Box
                        sx={{ display: 'flex', margin: 2, padding: 2, justifyContent: 'center' }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: 0.4 }} >
                            <FormLabel>Születési hely</FormLabel>
                            <TextField
                                variant='outlined'
                                sx={{ width: 'relative' }}
                                value={inputs.birthplace}
                                aria-readonly
                            />
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', width: 0.4, paddingLeft: '100px' }} >
                            <FormLabel>Születési idő</FormLabel>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker', 'DatePicker']}>
                                    {/* <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} /> */}
                                    <DatePicker
                                        label="Controlled picker"
                                        value={inputs.birthdate}
                                        // defaultValue={'Kovács'}
                                        aria-readonly
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Box>
                    </Box>

                    <Box
                        sx={{ display: 'flex', margin: 2, mr: 16, ml: 16, padding: 2, justifyContent: 'flex-end', borderRadius: 2, boxShadow: '5px 5px 10px #ccc' }}
                    >
                        <Button
                            variant='contained'
                            startIcon={<EditIcon />}
                            sx={{ ml: 3, mr: 3 }}
                            onClick={() => setModalOpen(true)}
                            size='large'
                        >
                            Szerkesztés
                        </Button>
                        <Button
                            variant='contained'
                            color='error'
                            startIcon={<DeleteIcon />} >Törlés</Button>
                    </Box>
                </form>
            </Box>


            <Modal
                // hideBackdrop     // ez a háttérszürkítés ,ha benne marad csak felugrik a kisablak
                open={modalOpen}
                onClose={handleClose}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'white',
                    p: 2,
                    width: 0.5,
                    boxShadow: '5px 5px 10px #ccc',
                    borderRadius: 2
                }}>
                    <form>
                        <Typography
                            variant='h4'
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >Szerkesztés
                        </Typography>
                        <Box
                            sx={{ display: 'flex', margin: 2, padding: 2, justifyContent: 'center' }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: 0.4 }} >
                                <TextField
                                    name='surname'
                                    label={'Vezetéknév'}
                                    variant='outlined'
                                    value={inputs.surname}
                                    onChange={handleChange}
                                />
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', width: 0.4, paddingLeft: '100px' }} >
                                <TextField
                                    name='forename'
                                    label={'Keresztnév'}
                                    variant='outlined'
                                    sx={{ width: 'relative' }}
                                    value={inputs.forename}
                                    onChange={handleChange}
                                />
                            </Box>
                        </Box>

                        <Box
                            sx={{ display: 'flex', margin: 2, padding: 2, justifyContent: 'center' }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: 0.4 }} >
                                <TextField
                                    name='mothersurname'
                                    label={'Anyja születési családi neve'}
                                    variant='outlined'
                                    value={inputs.mothersurname}
                                    onChange={handleChange}
                                />
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', width: 0.4, paddingLeft: '100px' }} >
                                <TextField
                                    name='motherforename'
                                    label={'Anyja születési keresztneve'}
                                    variant='outlined'
                                    value={inputs.motherforename}
                                    onChange={handleChange}
                                />
                            </Box>
                        </Box>

                        <Box
                            sx={{ display: 'flex', margin: 2, padding: 2, justifyContent: 'center' }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: 0.4 }} >
                                <TextField
                                    name='birthplace'
                                    label={'Születési hely'}
                                    variant='outlined'
                                    // sx={{ width: 'relative' }}
                                    value={inputs.birthplace}
                                    onChange={handleChange}
                                />
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', width: 0.4, paddingLeft: '100px' }} >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                                        <DatePicker
                                            type='date'
                                            name='birthdate'
                                            label={'Születési idő'}
                                            value={inputs.birthdate}
                                            onChange={handleChange}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Box>
                        </Box>

                        <Box
                            sx={{ display: 'flex', padding: 2, justifyContent: 'flex-end', borderRadius: 2, boxShadow: '5px 5px 10px #ccc' }}
                        >
                            <Button
                                type='submit'
                                variant='contained'
                                sx={{ ml: 3, mr: 3 }}
                                onClick={handleSubmit}
                                size='large'
                            >
                                Mentés
                            </Button>
                            <Button
                                onClick={handleClose}
                                variant='contained'
                                color='warning'
                            >
                                Mégse
                            </Button>
                        </Box>

                    </form>
                </Box>
            </Modal >

        </>
    )
}

export default PersonalData