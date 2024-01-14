import React, { useRef } from "react";

//#region MUI Imports
import Box from "@mui/material/Box";
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from "@mui/material/styles";
//#endregion

//#region Framer Motion Imports
import {
    motion,
    useScroll,
    useTransform
} from "framer-motion";
//#endregion

//#region Style Imports
import "./styles/DiscoverDesigns.css";
import { Button } from "@mui/material";
//#endregion

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const ImageTextParallaxAnimation = ({ isImageFirst, imageUrl, text }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    const theme = useTheme();

    return (
        <Box
            className='parallax-img-section'
            sx={{
                position: 'relative',
                height: '70vh',
                display: 'flex',
                flexDirection: isImageFirst ? 'row-reverse' : 'row',
                justifyContent: 'start',
                alignItems: 'center',
                scrollSnapAlign: 'center',
                perspective: '400px'
            }}>
            {/* <Box sx={{position: 'relative'}}> */}
                <Box sx={{
                    position: 'relative',
                    display: {
                        xs: 'none',
                        md: 'block'
                    },
                    width: '100%',
                    zIndex: 2,
                }}>
                    <motion.h2 className='parallax-h2' style={{
                        y,
                        position: 'absolute',
                        width: '100%',
                        fontSize: theme.typography.h1.fontSize,
                        fontWeight: '500',
                        letterSpacing: '4px',
                        lineHeight: '1.2',
                        textAlign: 'center',
                        margin: 0,
                        color: `${theme.palette.secondary.main}`,
                        textTransform: 'uppercase',
                        backgroundColor: `${theme.palette.secondary.main}`
                    }}>{text}</motion.h2>
                </Box>

                <Box sx={{
                    position: 'absolute',
                    display: {
                        xs: 'block',
                        md: 'none'
                    },
                    right: -5,
                    bottom: '20%',
                    // transform: 'translate(-100%, -100%)',
                    px: 5,
                    py: 2,
                    zIndex: 2,
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.secondary.main
                }}>
                    {text}
                </Box>

                <Box
                    ref={ref}
                    sx={{
                        position: {
                            xs: 'absolute',
                            md: 'relative'
                        },
                        width: '100%',
                        height: '400px',
                        maxHeight: '90vh',
                        // margin: '16px',
                        overflow: 'hidden',
                        zIndex: 1
                    }}
                >
                    {/* <img src={`https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress`} className='parallax-img' alt="A London skyscraper" /> */}
                    <img src={imageUrl}
                        className='parallax-img'
                        alt="A London skyscraper"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }} />
                </Box>
            {/* </Box> */}

        </Box>
    );
}

export default ImageTextParallaxAnimation