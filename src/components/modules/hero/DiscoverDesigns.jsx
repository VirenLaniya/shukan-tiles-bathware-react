// Photos from https://citizenofnowhe.re/lines-of-the-city
import React, { useRef } from "react";

//#region MUI Imports
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
import SectionTitle from "../common/SectionTitle";
import CustomSection from "../common/CustomSection";
//#endregion

//#region Style Imports
// import "./styles/DiscoverDesigns.css";
import FadeRevealAnimation from "../common/FadeRevealAnimation";
//#endregion

//#region Data Imports
import { discoverCreations } from '../../../data/hero'
//#endregion

export default function DiscoverDesigns() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <CustomSection sx={{ backgroundColor: theme => theme.palette.secondary.light }}>
            <Container>
                <FadeRevealAnimation>
                    <SectionTitle title={discoverCreations.title} />
                </FadeRevealAnimation>
                {
                    discoverCreations.creations.map((creation, index) => {
                        return (
                            <FadeRevealAnimation key={index}>
                                <ImageTextParallaxAnimation isImageFirst={(index + 1) % 2 != 0} imageUrl={creation.image} text={creation.title} />
                            </FadeRevealAnimation>
                        )
                    })
                }
            </Container>
        </CustomSection>
    );
}