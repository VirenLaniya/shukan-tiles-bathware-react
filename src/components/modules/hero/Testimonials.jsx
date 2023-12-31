import React, { useState } from 'react';

//#region MUI Imports
import { Typography, Box, Container, Button, IconButton } from '@mui/material';
import { useTheme, styled, alpha } from '@mui/material/styles';
//#endregion

//#region MUI Icons Imports
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
//#endregion

// import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
//#region React Swipeable Views
import SwipeableViews from 'react-swipeable-views'
import { virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core'
//#endregion

//#region Component Imports
import CustomSection from '../common/CustomSection';
import FadeRevealAnimation from '../common/FadeRevealAnimation';
//#endregion

//#region Data Imports
import { testimonials } from '../../../data/hero';
//#endregion


const EnhancedSwipeableViews = virtualize(SwipeableViews);

//#region Style Customization
const NavButton = styled(IconButton)(({ theme }) => ({
    border: `2px solid ${theme.palette.accent.first}`,
    color: theme.palette.accent.first,
    ':hover': {
        backgroundColor: theme.palette.accent.first,
        color: theme.palette.secondary.main
    }
}))
//#endregion

//#region Helper Functions
const Testimonial = ({ testimonial }) => {
    return (
        <Box className="testimonial">
            <Typography variant='body1' sx={{ fontSize: { xs: 20, md: 28 }, color: (theme) => theme.palette.primary.main, letterSpacing: 2 }}>{testimonial.text}</Typography>
            <Typography variant='h6' sx={{ mt: 4, color: (theme) => theme.palette.accent.first, letterSpacing: 2 }}>- {testimonial.author}</Typography>
        </Box>
    );
};

function slideRenderer(params) {
    const {
        index,
        key,
    } = params;
    let testimonial;

    switch (mod(index, 3)) {
        case 0:
            testimonial = testimonials[0];
            break;

        case 1:
            testimonial = testimonials[1];
            break;

        case 2:
            testimonial = testimonials[2];
            break;

        default:
            break;
    }

    return (
        <Testimonial key={key} testimonial={testimonial} />
    );
}

const TestimonialSlider = ({ testimonials, index, handleChangeIndex }) => {
    return (
        <Box className="testimonial-slider" sx={{ padding: 4, width: '100%', position: 'relative' }}>
            <FormatQuoteRoundedIcon sx={{ position: 'absolute', color: (theme) => alpha(theme.palette.accent.first, 0.3), fontSize: 128, top: '-15%', left: '-2%' }} />
            <EnhancedSwipeableViews
                index={index}
                onChangeIndex={handleChangeIndex}
                slideRenderer={slideRenderer}
                enableMouseEvents
            />
        </Box>
    );
};
//#endregion

const Testimonials = () => {

    const theme = useTheme();

    // const [value, setValue] = React.useState(0);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    // const handleChangeIndex = (index) => {
    //     setValue(mod(index, 3));
    // };


    const [index, setIndex] = useState(0);

    const handleChangeIndex = (newIndex) => {
        setIndex(mod(newIndex, 3));
    };

    return (
        <CustomSection sx={{ backgroundColor: theme.palette.secondary.main }}>
            {/* <ParallaxBanner style={{ height: '100%' }}> */}
            {/* <ParallaxBannerLayer image={statistics.backgroundImage} speed={-25} /> */}
            {/* <ParallaxBannerLayer style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', height: '100%' }}> */}
            <Box>
                <Container sx={{ height: '100%' }}>
                    <FadeRevealAnimation>
                        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'end', justifyContent: 'center' }}>
                            <TestimonialSlider
                                testimonials={testimonials}
                                index={index}
                                handleChangeIndex={handleChangeIndex}
                            />
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', columnGap: 2 }}>
                                <NavButton
                                    onClick={() => handleChangeIndex(index - 1)}
                                >
                                    <ChevronLeftRoundedIcon />
                                </NavButton>
                                <NavButton
                                    onClick={() => handleChangeIndex(index + 1)}
                                >
                                    <ChevronRightRoundedIcon />
                                </NavButton>
                            </Box>
                        </Box>
                    </FadeRevealAnimation>
                </Container>
            </Box>
            {/* </ParallaxBannerLayer> */}
            {/* </ParallaxBanner> */}
        </CustomSection>
    )
}

export default Testimonials