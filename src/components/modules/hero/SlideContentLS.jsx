import React from 'react'
import { useRef, useEffect } from "react";
import { useAnimate, useInView, usePresence } from "framer-motion";
import { Box, Button, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import LineDrawingEffect from './LineDrawingEffect';
import NoiseGlitchText from '../common/NoiseGlitchText';

const SlideContentLS = ({ slide }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <CardContent ref={ref}>
            {/* <Box sx={{ position: 'absolute', top: '0', left: '0', height: '100%', width: '100%' }}>
                <LineDrawingEffect isInView={isInView} />
            </Box> */}
            <Box>
                <NoiseGlitchText sx={{
                    mb: {xs: 2, md: 4},
                    color: (theme)=>theme.palette.secondary.main,
                    transform: isInView ? "none" : "translateY(-150px)",
                    opacity: isInView ? 1 : 0,
                    fontSize: {xs: 16, md: 24},
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} text={slide.description} />
                {/* <Typography variant="h2" sx={{
                    mb: 4,
                    color: 'white',
                    transform: isInView ? "none" : "translateX(-150px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                    {slide.title}
                </Typography> */}
                <NoiseGlitchText text={slide.title} sx={{
                    mb: {xs: 4, md: 12},
                    color: 'white',
                    transform: isInView ? "none" : "translateX(-150px)",
                    opacity: isInView ? 1 : 0,
                    fontSize: {xs: 28, md: 60},
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} />
                {
                    slide.buttonText && slide.buttonLink &&
                    <Link to={slide.buttonLink}>
                        <Button variant='secondary' sx={{
                            paddingX: 4,
                            paddingY: 2,
                            transform: isInView ? "none" : "translateY(150px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s"
                        }}>{slide.buttonText}</Button>
                    </Link>
                }
            </Box>
        </CardContent>
    )
}

export default SlideContentLS