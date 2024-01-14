import React, { useRef } from "react";

//#region MUI Imports
import Container from "@mui/material/Container";
//#endregion

//#region Component Imports
import CreationBox from './CreationBox'
import SectionTitle from "../common/SectionTitle";
import CustomSection from "../common/CustomSection";
//#endregion

//#region Style Imports
import FadeRevealAnimation from "../common/FadeRevealAnimation";
//#endregion

//#region Data Imports
import { discoverCreations } from '../../../data/hero'
//#endregion

export default function DiscoverCreations() {
    return (
        <CustomSection sx={{ backgroundColor: theme => theme.palette.background.paper }}>
            <Container>
                <FadeRevealAnimation>
                    <SectionTitle title={discoverCreations.title} />
                </FadeRevealAnimation>

                {
                    discoverCreations.creations.map((creation, index) => {
                        return (
                            <FadeRevealAnimation key={index}>
                                <CreationBox isImageFirst={(index + 1) % 2 != 0} imageUrl={creation.image} text={creation.title} />
                            </FadeRevealAnimation>
                        )
                    })
                }
            </Container>
        </CustomSection>
    );
}