import * as React from 'react';

//#region MUI Imports
import { styled, useTheme } from '@mui/material/styles';
import { Container, Box, Grid, Typography, Button, Divider } from '@mui/material';
//#endregion

//#region Component Imports
import CustomSection from '../common/CustomSection';
import UnderlineStyledTitle from '../common/UnderlineStyledTitle';
import FadeRevealAnimation from '../common/FadeRevealAnimation';
import SectionParagraph from '../common/SectionParagraph';
import SectionTitle from '../common/SectionTitle'
//#endregion

//#region Data Imports
import { introduction, madeInIndia } from '../../../data/about';
import { companyName, since, fadeRevealTime } from '../../../data/common';
//#endregion

const IntroSection = () => {

    const theme = useTheme()

    return (
        <CustomSection>
            <Container>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ width: '100%', height: '100%', minHeight: 10, borderTop: `8px solid ${theme.palette.accent.second}`, borderBottom: `8px solid ${theme.palette.accent.first}`, display: 'flex', alignItems: 'center' }}>
                            <FadeRevealAnimation>
                                <img src={introduction.introImage} alt={companyName} style={{ width: '100%', height: '100%', objectFit: 'contain', border: '8px solid transparent' }} />
                            </FadeRevealAnimation>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 5 }}>
                            <FadeRevealAnimation>
                                {/* <UnderlineStyledTitle variant='h3' sx={{ color: (theme) => theme.palette.primary.main, textTransform: 'uppercase' }}>{companyName}</UnderlineStyledTitle> */}
                                <SectionTitle sx={{ color: theme.palette.primary.main, pb: 1, textAlign: 'left', fontSize: '40px!important' }} title={companyName} />
                            </FadeRevealAnimation>
                            {/* <FadeRevealAnimation revealTime={1}> */}
                            <Typography variant='h6' sx={{ color: (theme) => theme.palette.accent.second, textTransform: 'uppercase' }}>{introduction.subHeading}</Typography>
                            {/* </FadeRevealAnimation> */}
                            <FadeRevealAnimation revealTime={fadeRevealTime + 0.1}>
                                <SectionParagraph>{introduction.description}</SectionParagraph>
                            </FadeRevealAnimation>
                            <FadeRevealAnimation revealTime={fadeRevealTime + 0.2}>
                                <Box sx={{ display: 'flex', columnGap: 5, alignItems: 'center' }}>
                                    <Box sx={{ width: '128px' }}>
                                        {/* <Link to={pages.filter(page => page.title === 'Products')[0].path}> */}
                                        <img src={madeInIndia.symbol} alt='Make In India' style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                                        {/* </Link> */}
                                    </Box>
                                    <Divider orientation="vertical" flexItem sx={{
                                        backgroundColor: (theme) => theme.palette.accent.second,
                                        width: 2,
                                        borderRadius: 8
                                    }} />
                                    <Box sx={{ textTransform: 'uppercase', letterSpacing: 4, fontWeight: '600' }}>Since
                                        <Typography sx={{ color: (theme) => theme.palette.accent.second, fontWeight: '700', fontSize: '18px' }}>{since}</Typography>
                                    </Box>
                                </Box>
                            </FadeRevealAnimation>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </CustomSection>
    );
}

export default IntroSection;