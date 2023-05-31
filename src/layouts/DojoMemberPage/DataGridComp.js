import React from 'react'
import { Typography, Box, Button, Grid } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import './../DojoMemberPage/local.css'

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 13, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 15, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 16, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 17, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 19, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 20, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 21, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 22, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 23, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 24, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 25, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 26, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 27, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const DataGridComp = () => {
    return (
        // <Grid container rowSpacing={1}>
        <Box sx={{ padding: 2, bgcolor: 'rgba(243, 236, 250, 0.8)', width: '100%' }}>
            {/* <Box alignItems={'center'} justifyContent='center'> */}
            {/* <Box display={'flex'} justifyContent={'center'} alignItems={'flex-start'} sx={{ boxShadow: '5px 5px 5px #ccc' }}> */}
            <div className='gridClass'>
                <Grid item xs={12} >
                    <Typography variant='subtitle1' sx={{ margin: 2, fontWeight: 'bold', fontSize: '20px' }}>Mátra Kempo SE Tagok</Typography>
                    <div className='dataGrid'>
                    <DataGrid
                        sx={{ bgcolor: 'white', width: '100%', position: 'unset', borderRadius: 2 }}
                        onCellEditStop={(params) => console.log(params)}
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 8,
                                },
                            },
                        }}
                        pageSizeOptions={[15]}
                        // checkboxSelection
                        disableRowSelectionOnClick
                    />
                    </div>
                    <Button
                        variant='contained'
                        sx={{ mt: 1 }}
                    >
                        Megnyitás</Button>
                </Grid>
            </div>
            {/* </Box> */}
            {/* </Grid> */}

        </Box>

    )
}

export default DataGridComp