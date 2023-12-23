import React from 'react'
import { Box, Container } from '@mui/material'
import NoiseGlitchText from './NoiseGlitchText'

const PageStarterSection = ({ children, sx, bgImage, title, ...others }) => {

    return (
        <Box sx={{
            // backgroundColor: 'rgb(0 0 0 / 0.5)',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            width: '100%',
            height: '45vh',
            ...sx
        }} {...others}>
            <Box sx={{width: '100%', height: '100%', backgroundColor: `rgb(0 0 0 / 0.6)`}}>
                <Container sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%'
                }}>
                    <NoiseGlitchText text={title} sx={{fontSize: '48px', textTransform: 'uppercase'}} />
                </Container>
            </Box>
        </Box>
    )
}

export default PageStarterSection