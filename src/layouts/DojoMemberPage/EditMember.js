import React from 'react'

const EditMember = () => {

    const [modalOpen, setModalOpen] = React.useState(false);
    
    return (
            <form>
                <Typography variant='h3' sx={{ color: 'red' }}>Modal Component</Typography>
                <Button sx={{ borderTop: 1, borderTopStyle: 'dotted', borderTopColor: 'red', marginTop: 3 }} variant="outlined" onClick={() => setModalOpen(true)}>
                    Open Modal
                </Button>
                <Modal
                    // hideBackdrop     // ez a háttérszürkítés ,ha benne marad csak felugrik a kisablak
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                >
                    <Box position="absolute" top="60%" left="50%" border={'solid'}
                    >
                        <Typography>It is a Modal</Typography>
                        <Button variant='contained' onClick={() => setModalOpen(false)}>
                            Click me
                        </Button>
                    </Box>
                </Modal>
            </form>
    )
}

export default EditMember