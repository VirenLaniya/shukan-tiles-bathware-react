import React from 'react'

//#region MUI Imports
import { Container, Box, Typography, Divider, useTheme, Button, Grid, useMediaQuery } from '@mui/material'

import { styled } from '@mui/material/styles'
//#endregion

//#region MUI Icons Imports
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
//#endregion

//#region Component Imports
import CustomSection from '../common/CustomSection'
import SectionTitle from '../common/SectionTitle'
import FadeRevealAnimation from '../common/FadeRevealAnimation'
import TeamBox from './TeamBox'
//#endregion

//#region Style Imports
// import './styles/Message.css'
//#endregion

//#region Data Imports
import { team } from '../../../data/about'
//#endregion

const Team = () => {

    const theme = useTheme();

    return (
        <>
            <CustomSection sx={{ backgroundColor: theme.palette.primary.main, zIndex: 1 }}>
                <FadeRevealAnimation>
                    <SectionTitle title={team.title} sx={{ color: theme.palette.primary.contrastText }} />
                </FadeRevealAnimation>
            </CustomSection>
            <Container sx={{ width: { xs: '95%', md: '100%' }, backgroundColor: theme.palette.background.paper, py: 12, px: { xs: 4, md: 8 }, transform: `translateY(-${theme.spacing(12)})`, zIndex: 2 }}>
                {
                    team.team.map((item, index) => {
                        return (
                            <FadeRevealAnimation key={index}>
                                <TeamBox isImageFirst={(index + 1) % 2 != 0} imageUrl={item.image} designation={item.designation} name={item.name} />
                            </FadeRevealAnimation>
                        )
                    })
                }
            </Container>
        </>
    )
}

export default Team