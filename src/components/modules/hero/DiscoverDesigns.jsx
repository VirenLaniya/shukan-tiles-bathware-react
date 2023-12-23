// Photos from https://citizenofnowhe.re/lines-of-the-city
import React, { useRef } from "react";

//#region MUI Imports
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from "@mui/material/styles";
//#endregion

//#region Framer Motion Imports
import {
    useScroll,
    useSpring,
} from "framer-motion";
//#endregion

//#region Component Imports
import ImageTextParallaxAnimation from './ImageTextParallaxAnimation'
//#endregion

//#region Style Imports
import "./styles/DiscoverDesigns.css";
import FadeRevealAnimation from "../common/FadeRevealAnimation";
//#endregion

export default function DiscoverDesigns() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <Box sx={{ backgroundColor: theme => theme.palette.secondary.main }}>
            <Container>
                <FadeRevealAnimation revealTime={0.5}>
                    <ImageTextParallaxAnimation isImageFirst={true} imageUrl='https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' text='Kitchen' />
                </FadeRevealAnimation>
                <FadeRevealAnimation revealTime={0.5}>
                    <ImageTextParallaxAnimation isImageFirst={false} imageUrl='https://images.pexels.com/photos/2102546/pexels-photo-2102546.jpeg?auto=compress&cs=tinysrgb&w=600' text='Tiles' />
                </FadeRevealAnimation>
                <FadeRevealAnimation revealTime={0.5}>
                    <ImageTextParallaxAnimation isImageFirst={true} imageUrl='https://images.pexels.com/photos/97047/pexels-photo-97047.jpeg?auto=compress&cs=tinysrgb&w=600' text='Customized' />
                </FadeRevealAnimation>
            </Container>
        </Box>
    );
}