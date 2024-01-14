import React from 'react';

//#region MUI Imports
import { Typography, Box, Container } from '@mui/material';
//#endregion

//#region MUI Icons Imports
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
//#endregion

//#region Component Imports
import FadeRevealAnimation from '../common/FadeRevealAnimation'
//#endregion

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

//#region Data Imports
import { acknowledgement } from '../../../data/hero';
//#endregion

const Acknowledgement = () => {
    return (
        <Box style={{ height: '90vh' }}>
            <ParallaxBanner style={{ height: '100%' }}>
                <ParallaxBannerLayer image={acknowledgement.backgroundImage} speed={-30} />
                <ParallaxBannerLayer style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', height: '100%' }}>
                    <Container sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        gap: 6
                    }}>
                        <FormatQuoteIcon sx={{ color: (theme) => theme.palette.secondary.main, fontSize: 92 }} />
                        <FadeRevealAnimation>
                            <Typography variant='h4' sx={{
                                // color: (theme) => theme.palette.common.white,
                                color: (theme) => theme.palette.primary.main,
                                textTransform: 'uppercase',
                                textAlign: 'center',
                                fontWeight: 500,
                                lineHeight: 1.5
                                // letterSpacing: '2px'
                            }}>
                                {acknowledgement.text}
                            </Typography>
                        </FadeRevealAnimation>
                    </Container>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </Box>
    )
}

export default Acknowledgement