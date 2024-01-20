import React, { useRef, useEffect } from 'react'

//#region React Router Imports
import { Link } from 'react-router-dom';
//#endregion

import { useAnimate, useInView, usePresence } from "framer-motion";
import { Box, Button, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material'

import LineDrawingEffect from './LineDrawingEffect';
import NoiseGlitchText from '../common/NoiseGlitchText';
import PrimaryButton from '../common/PrimaryButton';
import ResponsiveButton from '../../../utils/mui-helper/responsiveButtonSize';

const SlideContentLS = ({ slide }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const theme = useTheme();

    const mediumTab = useMediaQuery(theme.breakpoints.up("md"));
    const mobile = useMediaQuery(theme.breakpoints.up("xs"));

    return (
        <CardContent ref={ref}>
            {/* <Box sx={{ position: 'absolute', top: '0', left: '0', height: '100%', width: '100%' }}>
                <LineDrawingEffect isInView={isInView} />
            </Box> */}
            <Box>
                <Typography variant={mediumTab ? 'h4' : 'h5'} sx={{
                    mb: { xs: 1.5, md: 2 },
                    color: theme.palette.grey[700],
                    fontWeight: 500
                }}>{slide.description}</Typography>

                <Typography variant={mediumTab ? 'h2' : 'h3'} sx={{
                    mb: { xs: 2, md: 5 },
                    color: theme.palette.primary.main,
                    textTransform: 'uppercase',
                    letterSpacing: 8,
                    fontWeight: 500
                }}>{slide.title}</Typography>

                {
                    slide.buttonText &&
                    <Link to={slide.buttonLink}>
                        <Button variant='contained' size={ResponsiveButton('medium')}>{slide.buttonText}</Button>
                    </Link>
                }

            </Box>
        </CardContent >
    )
}

export default SlideContentLS