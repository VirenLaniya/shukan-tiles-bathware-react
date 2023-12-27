import React from 'react'

import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'

import './styles/ShootingStarLineDivider.css'

const ShootingStarLineDivider = ({delay}) => {
    return (
        <Box className='shooting-star-line' sx={{
            '&::after': {
                animationDelay: delay
            }
        }}></Box>
    )
}

export default ShootingStarLineDivider