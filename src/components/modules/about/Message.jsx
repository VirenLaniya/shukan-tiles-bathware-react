import React from 'react'

//#region React Router Imports
import { Link } from 'react-router-dom'
//#endregion

//#region MUI Imports
import { Container, Box, Typography, Divider, Button, Grid } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
//#endregion

//#region MUI Icons Imports
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
//#endregion

//#region Component Imports
import CustomSection from '../common/CustomSection'
import SectionTitle from '../common/SectionTitle'
import FadeRevealAnimation from '../common/FadeRevealAnimation'
import SectionParagraph from '../common/SectionParagraph'
//#endregion

//#region Style Imports
import './styles/Message.css'
//#endregion

//#region Data Imports
import { pages, since, fadeRevealTime } from '../../../data/common'
import { introduction } from '../../../data/hero'
import { message } from '../../../data/about'
//#endregion

const Introduction = () => {

    const theme = useTheme()

    return (
        <>
            <CustomSection sx={{ backgroundColor: theme.palette.primary.main, zIndex: 1 }}>
                <FadeRevealAnimation>
                    <SectionTitle title={message.title} sx={{ color: theme.palette.primary.contrastText }} />
                </FadeRevealAnimation>
            </CustomSection>
            <Container sx={{ width: { xs: '95%', md: '100%' }, backgroundColor: theme.palette.background.paper, py: 12, px: { xs: 4, md: 8 }, transform: `translateY(-${theme.spacing(12)})`, zIndex: 2 }}>
                <Grid container rowSpacing={10}>
                    <Grid item xs={12} md={5}>
                        <FadeRevealAnimation>
                            <Box sx={{ display: 'flex', justifyContent: 'center', px: 4 }}>
                                <Box sx={{ position: 'relative', width: { xs: '100%', md: '75%' }, mx: 'auto' }}>
                                    {/* <Box sx={{ position: 'absolute', width: '64px', height: '100%', top: '64px', left: '-32px', backgroundColor: theme.palette.primary.main }}></Box>
                                    <Box sx={{ position: 'absolute', width: '8px', height: '100%', top: '48px', left: '40px', backgroundColor: theme.palette.primary.light }}></Box> */}
                                    <Box sx={{ position: 'absolute', width: '64px', height: '75%', top: '25%', left: '-32px', backgroundColor: theme.palette.primary.main }}></Box>
                                    <Box sx={{ position: 'absolute', width: '6px', height: '75%', top: '25%', left: '40px', backgroundColor: theme.palette.secondary.main }}></Box>
                                    <img className='message-picture' src={message.image} alt={message.title} />
                                    <Box sx={{ pl: 7 }}>
                                        <Typography variant='h5'>{message.managingDirector}</Typography>
                                        <SectionParagraph sx={{ color: theme.palette.text.disabled, fontSize: 17 }}>{message.managingDirectorAbout}</SectionParagraph>
                                    </Box>
                                </Box>
                            </Box>
                        </FadeRevealAnimation>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', rowGap: 5 }}>
                            <FadeRevealAnimation revealTime={1}>
                                <Box>
                                    <FormatQuoteRoundedIcon sx={{color: theme.palette.secondary.main, transform: 'rotate(180deg)', fontSize: 60}} />
                                    <Typography variant='h6' sx={{ color: theme.palette.primary.light, textTransform: 'uppercase', textAlign: 'center' }}>{introduction.subHeading}</Typography>
                                    <Typography sx={{textAlign: 'end'}}>
                                        <FormatQuoteRoundedIcon sx={{color: theme.palette.secondary.main, fontSize: 60}} />
                                    </Typography>
                                </Box>
                            </FadeRevealAnimation>
                            <FadeRevealAnimation revealTime={fadeRevealTime + 0.1}>
                                <Typography variant='p' sx={{ lineHeight: 2 }}>{introduction.description}</Typography>
                            </FadeRevealAnimation>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </>

    )
}

export default Introduction