import React, { useState } from 'react'
import { Box, FormLabel, TextField, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';

const PersonalData = () => {

    const [disable, setDisable] = useState(true);
    const [surname, setSurname] = useState('');
    const [dateValue, setDateValue] = React.useState(dayjs('2022-04-17'));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'white', margin: 2, borderRadius: 2, boxShadow: '5px 5px 10px #ccc' }}>

            <form>
                <Box
                    sx={{ display: 'flex', margin: 2, padding: 2, justifyContent: 'center' }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: 0.4 }} >
                        <FormLabel>Vezetéknév</FormLabel>
                        <TextField
                            variant='outlined'
                            value={surname}
                            defaultValue={'Kovács'}
                            onInput={ e => setSurname(e.target.value)}
                            aria-readonly
                        />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', width: 0.4, paddingLeft: '100px' }} >
                        <FormLabel>Keresztnév</FormLabel>
                        <TextField
                            variant='outlined'
                            sx={{ width: 'relative' }}
                            disabled={disable ? true : false}
                            value={'Boldizsár'}
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
                            disabled={disable ? true : false}
                            value={'Szabó'}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', width: 0.4, paddingLeft: '100px' }} >
                        <FormLabel>Anyja születési keresztneve</FormLabel>
                        <TextField
                            variant='outlined'
                            sx={{ width: 'relative' }}
                            disabled={disable ? true : false}
                            value={'Ilona'}
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
                            disabled={disable ? true : false}
                            value={'Budapest'}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', width: 0.4, paddingLeft: '100px' }} >
                        <FormLabel>Születési idő</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                {/* <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} /> */}
                                <DatePicker
                                    label="Controlled picker"
                                    value={dateValue}
                                    onChange={(newValue) => setDateValue(newValue)}
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
                        size='large'>Mentés</Button>
                    <Button
                        variant='contained'
                        startIcon={<EditIcon />}
                        sx={{ ml: 3, mr: 3 }}
                        onClick={() => {
                            setDisable(!disable)
                        }}
                    >Szerkesztés</Button>
                    <Button
                        variant='contained'
                        color='error'
                        startIcon={<DeleteIcon />} >Törlés</Button>
                </Box>
            </form>
        </Box>
    )
}

export default PersonalData