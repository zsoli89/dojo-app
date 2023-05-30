import { Box, Dialog, FormLabel, TextField } from '@mui/material'
import React from 'react'

const AddMainBlog = () => {
    return (
    // <Box display='flex' flexDirection={'column'} width='100%' height='100%'>
        // <Box display='flex' margin='auto' padding={2}>

        // </Box>
        
        <Dialog open={true}>
        <form>
            <Box 
            padding={3} 
            display='flex'
             margin='auto' 
             flexDirection={'column'}
             >
                <FormLabel>Title</FormLabel>
                <TextField margin='normal' />
                <FormLabel>Description</FormLabel>
                <TextField margin='normal' />
                <FormLabel>Image URL</FormLabel>
                <TextField margin='normal' />
                <FormLabel>Location</FormLabel>
                <TextField margin='normal' />
                <FormLabel>Date</FormLabel>
                <TextField margin='normal' />
            </Box>
        </form>
        </Dialog>
        // </Box>
    )
}

export default AddMainBlog