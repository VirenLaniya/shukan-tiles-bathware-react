import React from 'react'
//#region React Router Imports
import { Link } from 'react-router-dom'
//#endregion

//#region MUI Imports
import { Box, Button } from '@mui/material'
//#endregion

//#region Data Imports
import { pageNotFound } from '../../data/common'
//#endregion

const PageNotFound = () => {
    return (
        <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
            <Box sx={{ width: { xs: '90%', md: '25%' }, objectFit: 'contain', boxSizing: 'border-box' }}>
                <img src={pageNotFound.image} alt={pageNotFound.title} style={{ width: '100%', height: '100%' }} />
            </Box>
            <Box>
                <Link to={pageNotFound.link}>
                    <Button variant="outlined" size='small'>
                    {pageNotFound.linkText}
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}

export default PageNotFound