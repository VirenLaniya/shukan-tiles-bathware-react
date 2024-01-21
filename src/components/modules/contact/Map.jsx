import React from 'react'

//#region MUI Imports
import { Container, Box, useTheme } from '@mui/material'
//#endregion

//#region Component Imports
import CustomSection from '../common/CustomSection'
import SectionTitle from '../common/SectionTitle'
import FadeRevealAnimation from '../common/FadeRevealAnimation'
//#endregion

//#region Data Imports
import { map } from '../../../data/contact'
//#endregion

const Map = () => {
    const theme = useTheme()
    return (
        <CustomSection sx={{ backgroundColor: theme.palette.background.paper }}>
            <FadeRevealAnimation>
                <SectionTitle title={map.title} />
            </FadeRevealAnimation>
            <Container>
                <FadeRevealAnimation>
                    <Box>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3675.063104167926!2d70.85033797531042!3d22.91104317925218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDU0JzM5LjgiTiA3MMKwNTEnMTAuNSJF!5e0!3m2!1sen!2sin!4v1705822911084!5m2!1sen!2sin" style={{ width: '100%', height: '400px', border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                </FadeRevealAnimation>
            </Container>
        </CustomSection>
    )
}

export default Map