import React from 'react'

//#region MUI Imports
import { Typography, Container, Box, Link } from '@mui/material'
import { useTheme } from '@mui/material/styles'
//#endregion

//#region Component Imports
import CustomSection from '../common/CustomSection'
import SectionTitle from '../common/SectionTitle'
import FadeRevealAnimation from '../common/FadeRevealAnimation';
//#endregion

//#region Data Imports
import { groupOfCompanies } from '../../../data/about'
import { fundamentals } from '../../../data/about';
//#endregion

const GroupOfCompanies = () => {

    const theme = useTheme();

    return (
        <CustomSection>
            <SectionTitle title={groupOfCompanies.title} />
            <Container maxWidth='sm' sx={{
                // py: 10,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>
                {
                    groupOfCompanies.companies.map((item, index) => {
                        return (
                            <Box sx={{
                                py: { xs: 8, md: 0 },
                                width: '100%',
                                height: '100%',
                                // borderRight: { xs: 'none', md: index < (fundamentals.length - 1) ? '1px solid' : 'none' },
                                // borderBottom: { xs: index < (fundamentals.length - 1) ? '1px solid' : 'none', md: 'none' },
                                borderColor: theme.palette.primary.main,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} key={index}>
                                <FadeRevealAnimation>
                                    <Link href={item.link} underline='none' sx={{ width: '100%', height: '100%' }}>
                                        <Box sx={{ width: 128, height: 'auto' }}>
                                            <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                        </Box>
                                    </Link>
                                </FadeRevealAnimation>
                                {/* <FadeRevealAnimation>
                                        <Typography variant='h6' sx={{ color: theme.palette.secondary.contrastText, fontWeight: '500' }}>{item.title}</Typography>
                                    </FadeRevealAnimation> */}
                            </Box>
                        )
                    })
                }
            </Container>
        </CustomSection>
    )
}

export default GroupOfCompanies