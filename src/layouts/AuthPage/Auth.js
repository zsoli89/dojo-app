import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Auth = () => {

    const [isSignup, setSignup] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const [inputs, setInputs] = useState({ name: '', email: '', password: '' });
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    return (


        <Box
            width='40%'
            borderRadius={8}
            boxShadow={'5px 5px 10px #ccc'}
            margin='auto'
            marginTop={10}
        >
            <form onSubmit={handleSubmit}>
                <Box
                    display='flex'
                    flexDirection='column'
                    width='60%'
                    padding={5}
                    margin='auto'
                >
                    <Typography variant='h4' textAlign='center'>
                        { !isSignup ? 'Login' : 'SignUp'}
                    </Typography>
                    {isSignup && (
                        <>
                            <FormLabel>Name</FormLabel>
                            <TextField
                                onChange={handleChange}
                                value={inputs.name}
                                name='name'
                                required
                                margin='normal' />
                        </>
                    )}
                    <FormLabel>Email</FormLabel>
                    <TextField
                        value={inputs.email}
                        name='email'
                        type='email'
                        margin='normal' />
                    <FormLabel>Password</FormLabel>
                    <TextField
                        value={inputs.password}
                        name='password'
                        type='password'
                        margin='normal' />
                    <Button sx={{ mt: 2, borderRadius: 10 }} type='submit' variant='contained'>
                        { !isSignup ? 'Login' : 'SignUp'}
                    </Button>
                    <Button
                        onClick={() => setSignup(!isSignup)}
                        sx={{ mt: 2, borderRadius: 10 }}
                        type='submit'
                        variant='outlined'>
                        Change to { isSignup ? 'SignUp' : 'Login'}
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default Auth