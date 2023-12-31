import React from 'react'

//#region React Router Imports
import { Link } from 'react-router-dom'
//#endregion

//#region MUI Imports
import { Container, Box, Typography, Divider, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
//#endregion

//#region Component Imports
import CustomSection from '../common/CustomSection'
import SectionTitle from '../common/SectionTitle'
//#endregion

//#region Data Imports
import { pages, since, fadeRevealTime } from '../../../data/common'
import { introduction } from '../../../data/hero'
import FadeRevealAnimation from '../common/FadeRevealAnimation'
//#endregion

const Introduction = () => {

    const theme = useTheme()

    return (
        <>
            <CustomSection sx={{ backgroundColor: theme.palette.primary.main, zIndex: 1 }}>
                <FadeRevealAnimation>
                    <SectionTitle title={introduction.heading} sx={{ color: theme.palette.primary.contrastText }} />
                </FadeRevealAnimation>
            </CustomSection>
            <Container maxWidth='md' sx={{ width: { xs: '95%', md: '100%' }, backgroundColor: theme.palette.secondary.main, py: 12, px: { xs: 4, md: 8 }, transform: `translateY(-${theme.spacing(12)})`, zIndex: 2 }}>
                <Box>
                    <FadeRevealAnimation>
                        <Box sx={{ width: { xs: '100%', md: '75%' }, mx: 'auto' }}>
                            <img src={introduction.introImage} alt={introduction.heading} style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} />
                        </Box>
                    </FadeRevealAnimation>
                    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 5, pt: 12 }}>
                        {/* <FadeRevealAnimation revealTime={1}> */}
                        <Typography variant='h6' sx={{ color: theme.palette.accent.second, textTransform: 'uppercase', textAlign: 'center' }}>{introduction.subHeading}</Typography>
                        {/* </FadeRevealAnimation> */}
                        <FadeRevealAnimation revealTime={fadeRevealTime + 0.1}>
                            <Typography variant='p' sx={{ lineHeight: 2 }}>{introduction.description}</Typography>
                        </FadeRevealAnimation>
                        <FadeRevealAnimation revealTime={fadeRevealTime + 0.2}>
                            <Box sx={{ display: 'flex', columnGap: 5, alignItems: 'center', justifyContent: 'center' }}>
                                <Box sx={{ py: 2 }}>
                                    <Link to={pages.filter(page => page.title === 'Product')[0].path}>
                                        <Button variant='outlined' sx={{ px: 4, py: 2, fontSize: '16px' }}>Discover More</Button>
                                    </Link>
                                </Box>
                                <Divider orientation="vertical" flexItem sx={{
                                    backgroundColor: theme.palette.accent.second,
                                    width: 2,
                                    borderRadius: 8
                                }} />
                                <Box sx={{ py: 2, textTransform: 'uppercase', letterSpacing: 4, fontWeight: '600' }}>Since
                                    <Typography sx={{ color: theme.palette.accent.second, fontWeight: '700', fontSize: '18px' }}>{since}</Typography>
                                </Box>
                            </Box>
                        </FadeRevealAnimation>
                    </Box>
                </Box>
            </Container>
        </>

    )
}

export default Introduction