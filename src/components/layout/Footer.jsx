import React from 'react'

//#region React Router Imports
import { Link } from 'react-router-dom';
//#endregion

//#region MUI Imports
import {
    Box, 
    Container, 
    Typography, 
    Divider, 
    Grid,
    InputAdornment, 
    IconButton, 
    OutlinedInput, 
    Link as MuiLink, 
    useTheme
} from '@mui/material'
import { alpha, styled } from '@mui/material/styles';
//#endregion

//#region MUI Icons Imports
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
//#endregion

//#region Data Imports
import { footerCompany, 
    companyName, 
    footerExplore, 
    footerNewsLetter, 
    footerContact, 
    footerCopyright } from '../../data/common';
//#endregion

//#region Style Customization
const FooterHeading = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    textTransform: 'uppercase',
    fontWeight: '500',
    letterSpacing: 2
}))

const FooterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    ':hover': {
        color: theme.palette.secondary.main
    }
}))

const FooterContactLink = styled(MuiLink)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    ':hover': {
        color: theme.palette.secondary.main
    }
}))

const FooterInput = styled(OutlinedInput)(({ theme }) => ({
    // 'label + &': {
    //     marginTop: theme.spacing(3),
    // },
    color: theme.palette.primary.contrastText,
    borderRadius: 10,
    position: 'relative',
    backgroundColor: theme.palette.action.disabledBackground,
    border: '2px solid',
    borderColor: 'transparent',
    fontSize: 16,
    width: 'auto',
    transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
    ]),
    '&.Mui-focused': {
        borderColor: theme.palette.secondary.main
    },
    // Remove the gray line inside the input field
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent'
    },

    // Customize the hover effect
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent', // Change this to the desired hover color
    },
}));
//#endregion

//#region Helper Functions
const GetIcon = (iconFor) => {
    const text = iconFor.toLowerCase();
    if (text.startsWith('address')) {
        return <LocationOnRoundedIcon color='secondary' />
    } else if (text.startsWith('mobile')) {
        return <CallRoundedIcon color='secondary' />
    } else if (text.startsWith('email')) {
        return <MailRoundedIcon color='secondary' />
    }
}

const Connect = (platform, link, index) => {

    const iconFontSize = '28px';
    const icon = () => {
        switch (platform) {
            case "linkedin":
                return <LinkedInIcon sx={{ fontSize: iconFontSize }} />;
            case "facebook":
                return <FacebookRoundedIcon sx={{ fontSize: iconFontSize }} />
            case "instagram":
                return <InstagramIcon sx={{ fontSize: iconFontSize }} />
            case "whatsapp":
                return <WhatsAppIcon sx={{ fontSize: iconFontSize }} />
            default:
                return;
        }
    }

    return (
        <MuiLink href={link} target="_blank" key={index}>
            <IconButton aria-label={platform} color="secondary" sx={{ width: '50px', height: '50px' }}>
                {icon()}
            </IconButton>
        </MuiLink>
    )
}
//#endregion

const Footer = () => {

    const theme = useTheme();

    return (
        <Box sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
            <Container>
                <Box sx={{ py: { xs: 5, md: 10 } }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} lg={3}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'start' } }}>
                                <img src={footerCompany.logo} alt={companyName} style={{ width: '50%', maxWidth: '150px' }} />
                                <Typography variant='body1' sx={{ py: 3, color: (theme) => theme.palette.primary.contrastText, lineHeight: 2 }}>
                                    {footerCompany.about}
                                </Typography>
                                <Box sx={{ display: 'flex', columnGap: 2 }}>
                                    {
                                        footerCompany.connect.map((item, index) => {
                                            return (
                                                Connect(item.platform, item.link, index)
                                            )
                                        })
                                    }
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Box>
                                <FooterHeading variant='h5'>Explore</FooterHeading>
                                <Divider sx={{ backgroundColor: (theme) => theme.palette.secondary.main, my: 3 }} />
                                <Grid container spacing={2}>
                                    {
                                        footerExplore.map((item, index) => {
                                            return (
                                                <Grid item xs={6} md={footerExplore.length > 6 ? 6 : 12} key={index}>
                                                    <FooterLink to={item.path}>{item.title}</FooterLink>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Box>
                                <FooterHeading variant='h5'>News Letter</FooterHeading>
                                <Divider sx={{ backgroundColor: (theme) => theme.palette.secondary.main, my: 3 }} />
                                <Box>
                                    <FooterInput
                                        placeholder='Email Address'
                                        type='email'
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                >
                                                    <MailRoundedIcon color='secondary' />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        sx={{ width: '100%', mb: 3 }}
                                    />
                                    <Typography variant='body2' sx={{ color: (theme) => alpha(theme.palette.primary.contrastText, 0.6), lineHeight: 2 }}>{footerNewsLetter.description}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Box>
                                <FooterHeading variant='h5'>Contact</FooterHeading>
                                <Divider sx={{ backgroundColor: (theme) => theme.palette.secondary.main, my: 3 }} />
                                <Grid container spacing={2}>
                                    {
                                        Object.keys(footerContact).map((key, index) => {
                                            const contactLink = () => {
                                                const text = key.toLowerCase();
                                                if (text.startsWith('address')) {
                                                    return footerContact[key].link
                                                } else if (text.startsWith('mobile')) {
                                                    return `tel:${footerContact[key].link}`
                                                } else if (text.startsWith('email')) {
                                                    return `mailto:${footerContact[key].link}`
                                                }
                                            }
                                            return (
                                                <Grid item xs={12} sx={{ display: 'flex', columnGap: 2 }} key={index}>
                                                    {GetIcon(key)}
                                                    <FooterContactLink href={contactLink()} sx={{ color: theme => theme.palette.primary.contrastText, ':hover': {} }}>
                                                        {footerContact[key].text}
                                                    </FooterContactLink>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Divider sx={{ backgroundColor: theme.palette.secondary.main }} />
                <Box sx={{ py: 4 }}>
                    <Typography variant='body1' sx={{ color: alpha(theme.palette.primary.contrastText, 0.8), textAlign: 'center' }}>{footerCopyright.copyrightText}</Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer