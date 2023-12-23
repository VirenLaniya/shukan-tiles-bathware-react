import React from 'react'

import {Box} from '@mui/material'

import './styles/NoiseGlitchText.css'

const NoiseGlitchText = ({sx, text, ...others}) => {
    return (
        // <Box className="glitch-wrapper" sx={...sx} >
            <Box className="glitch" data-glitch={text} sx={sx ? {...sx} : {}}>{text}</Box>
        // </Box>
    )
}

export default NoiseGlitchText