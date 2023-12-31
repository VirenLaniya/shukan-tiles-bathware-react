import React from 'react'
import { useRef, useEffect } from "react";
import { useAnimate, useInView, usePresence } from "framer-motion";
import { Box, Button, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import LineDrawingEffect from './LineDrawingEffect';
import NoiseGlitchText from '../common/NoiseGlitchText';
import PrimaryButton from '../common/PrimaryButton';
import ResponsiveButton from '../../../utils/mui-helper/responsiveButtonSize';

const SlideContentLS = ({ slide }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <CardContent ref={ref}>
            {/* <Box sx={{ position: 'absolute', top: '0', left: '0', height: '100%', width: '100%' }}>
                <LineDrawingEffect isInView={isInView} />
            </Box> */}
            <Box>
                <Typography variant='h4' sx={{
                    mb: { xs: 2, md: 4 },
                    color: (theme) => theme.palette.secondary.main,
                }}>{slide.description}</Typography>

                <Typography variant='h2' sx={{
                    mb: { xs: 2, md: 4 },
                    color: (theme) => theme.palette.secondary.main,
                    textTransform: 'uppercase',
                    letterSpacing: 8
                }}>{slide.title}</Typography>

                {/* <Button variant='contained' size='large'>Know About Us</Button> */}
                <Button variant='contained' size={ResponsiveButton('medium')}>Know About Us</Button>
                {/* <Button variant='contained' size='small'>Know About Us</Button> */}
            </Box>
        </CardContent >
    )
}

export default SlideContentLS