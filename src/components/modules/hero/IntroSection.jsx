import * as React from 'react';

//#region React Router Imports
import { Link } from 'react-router-dom'
//#endregion

//#region MUI Imports
import { Container, Box, Grid, Typography, Button, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
//#endregion

//#region Component Imports
import CustomSection from '../common/CustomSection';
import UnderlineStyledTitle from '../common/UnderlineStyledTitle';
import FadeRevealAnimation from '../common/FadeRevealAnimation';
//#endregion

//#region Data Imports
import { introduction } from '../../../data/hero';
import { companyName, pages, since } from '../../../data/common';
//#endregion

const IntroSection = () => {

    const theme = useTheme();

    return (
        <Container>
            <CustomSection>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6}>
                        <FadeRevealAnimation revealTime={0.5}>
                            <Box sx={{ width: '100%', height: '100%', minHeight: 10 }}>
                                <img src={introduction.introImage} alt={companyName} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Box>
                        </FadeRevealAnimation>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 5 }}>
                            <FadeRevealAnimation revealTime={0.8}>
                                <UnderlineStyledTitle variant='h3' sx={{ color: theme.palette.primary.main, textTransform: 'uppercase' }}>{companyName}</UnderlineStyledTitle>
                            </FadeRevealAnimation>
                            {/* <FadeRevealAnimation revealTime={1}> */}
                                <Typography variant='h6' sx={{ color: theme.palette.accent.second, textTransform: 'uppercase' }}>{introduction.subHeading}</Typography>
                            {/* </FadeRevealAnimation> */}
                            <FadeRevealAnimation revealTime={1.1}>
                                <Typography variant='p' sx={{ lineHeight: 2 }}>{introduction.description}</Typography>
                            </FadeRevealAnimation>
                            <FadeRevealAnimation revealTime={1.2}>
                                <Box sx={{ display: 'flex', columnGap: 5, alignItems: 'center' }}>
                                    <Box sx={{ py: 2 }}>
                                        <Link to={pages.filter(page => page.title === 'Product')[0].path}>
                                            <Button variant='primary' sx={{ px: 4, py: 2, fontSize: '16px' }}>Discover More</Button>
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
                    </Grid>
                </Grid>
            </CustomSection>
        </Container>
    );
}

export default IntroSection;