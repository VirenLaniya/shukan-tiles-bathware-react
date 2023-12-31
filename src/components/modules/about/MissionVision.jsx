import React from 'react'

//#region MUI Imports
import { Box, Container, Typography, Grid } from '@mui/material'
//#endregion

//#region Component Imports
import CustomSection from '../common/CustomSection'
import SectionTitle from '../common/SectionTitle'
import FadeRevealAnimation from '../common/FadeRevealAnimation'
import SectionParagraph from '../common/SectionParagraph'
//#endregion

//#region Data Imports
import { missionVision } from '../../../data/about'
//#endregion

const MissionVision = () => {
    return (
        <CustomSection>
            <Container>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6}>
                        <FadeRevealAnimation>
                            <Box>
                                <SectionTitle title={missionVision.mission.title} />
                                <SectionParagraph>
                                    {missionVision.mission.description}
                                </SectionParagraph>
                            </Box>
                        </FadeRevealAnimation>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FadeRevealAnimation>
                            <Box>
                                <SectionTitle title={missionVision.vision.title} />
                                <SectionParagraph>
                                    {missionVision.vision.description}
                                </SectionParagraph>
                            </Box>
                        </FadeRevealAnimation>
                    </Grid>
                </Grid>
            </Container>
        </CustomSection>
    )
}

export default MissionVision