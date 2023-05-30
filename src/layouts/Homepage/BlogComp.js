import { Typography, Button, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormLabel, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const BlogComp = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>{/* <Box>
            <Link to={'mainblog/add'}>
                <Button
                color='inherit'
                sx={{ margin: 3 }}
                size='large'
                variant='contained'
            >
                ÚJ BEJEGYZÉS
                </Button>
            </Link>
        </Box> */}

            <Button variant="outlined" onClick={handleClickOpen}>
                Új bejegyzés
            </Button>

            <Dialog open={open} onClose={handleClose} >
                <form>
                    <Box
                        padding={3}
                        display='flex'
                        margin='auto'
                        // width='80%'
                        flexDirection={'column'}
                    >
                        <DialogTitle>Új blog bejegyzés hozzáadása</DialogTitle>
                        <FormLabel sx={{ fontFamily: 'quicksand' }}>Cím</FormLabel>
                        <TextField margin='normal' />
                        <FormLabel sx={{ fontFamily: 'quicksand' }}>Leírás</FormLabel>
                        <TextField margin='normal' />
                        <FormLabel sx={{ fontFamily: 'quicksand' }}>Image URL</FormLabel>
                        <TextField margin='normal' />
                        <FormLabel sx={{ fontFamily: 'quicksand' }}>Location</FormLabel>
                        <TextField margin='normal' />
                        <FormLabel sx={{ fontFamily: 'quicksand' }}>Dátum</FormLabel>
                        <TextField margin='normal' />
                        <DialogActions>
          <Button color='warning' variant='contained' sx={{ margin: 'auto'}} onClick={handleClose}>Mégse</Button>
          <Button color='success' variant='contained' sx={{ margin: 'auto'}} onClick={handleClose}>Hozzáad</Button>
        </DialogActions>
                    </Box>
                </form>
            </Dialog>




            <Box>
                <Typography variant='h2' style={{ fontFamily: 'inherit' }} align='center'>
                    Blog bejegyzés címe
                </Typography>
                <Typography variant='h6' style={{ fontFamily: 'inherit' }} align='center'>Bejegyzés ideje</Typography>
                <Typography align='justify' style={{ fontFamily: 'inherit' }} >
                    Blog szövege akár több soros is
                    akldjféladjf lkdaskfjjlasdkjflkdsjf lkdsajfélkdasj flkdasjfélkdasjf disableOnInteractionjdslkf
                    jaédkfjoida fj dsijfoids vmoi fdijdoifjhoidfj  oiasjfoodasofajsfjdaso jfáafjasdfjda sfjdéskfj adsélkfjdoiafjd aéjfdéia gjidéfjédla fadead
                    jald fjédali joéda fda fj dsijfoids vmoi fdijdoifjhoidfj  oiasjfoodasofajsfjdaso jfáafjasdfjda sfjdéskfj  adsélkfjdoiafjd aéjfdéia gjidéfjédla
                </Typography>
                <Typography sx={{ fontStyle: 'italic' }} fontWeight={'bold'} align='right'>írta és rendezte</Typography>
            </Box></>
    )
}

export default BlogComp