import React from 'react'

//#region MUI Imports
import {Container, Box} from '@mui/material'
//#endregion

//#region Data Imports
import { madeInIndia } from '../../../data/about'
//#endregion

const MadeInIndia = () => {
    return (
        <Box sx={{ width: '100%', height: 'auto' }}>
            <img src={madeInIndia.image} alt='Made In India' style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        </Box>
    )
}

export default MadeInIndia