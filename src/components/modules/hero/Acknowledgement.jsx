import React from 'react';

//#region MUI Imports
import { Typography, Box, Container } from '@mui/material';
//#endregion

//#region MUI Icons Imports
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
//#endregion

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

//#region Data Imports
import { acknowledgement } from '../../../data/hero';
//#endregion

const Acknowledgement = () => {
    return (
        <Box style={{ height: '450px' }}>
            <ParallaxBanner style={{ height: '100%' }}>
                <ParallaxBannerLayer image={acknowledgement.backgroundImage} speed={-30} />
                <ParallaxBannerLayer style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', height: '100%' }}>
                    <Container sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        gap: 5
                    }}>
                        <FormatQuoteIcon sx={{ color: (theme) => theme.palette.accent.first, fontSize: 64 }} />
                        <Typography variant='h4' sx={{
                            color: (theme) => theme.palette.secondary.main,
                            textTransform: 'uppercase',
                            textAlign: 'center',
                            // letterSpacing: '2px'
                        }}>
                            {acknowledgement.text}
                        </Typography>
                    </Container>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </Box>
    )
}

export default Acknowledgement