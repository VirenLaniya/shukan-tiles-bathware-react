import React, { useRef, useState } from 'react';

//#region MUI Imports
import { Container, Box, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles'
//#endregion

//#region MUI Icons Imports
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
//#endregion

//#region Swiper Imports
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { A11y, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
// Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
//#endregion

//#region Component Imports
import CustomSection from '../common/CustomSection';
import SectionTitle from '../common/SectionTitle';
import FadeRevealAnimation from '../common/FadeRevealAnimation';
//#endregion

//#region Data Imports
import { designs } from '../../../data/hero'
//#endregion

const SwiperBox = styled(Box)(({ theme }) => ({
    '.swiper-pagination-bullet.swiper-pagination-bullet-active': {
        backgroundColor: theme.palette.primary.main
    }
}))

const NavButton = styled(IconButton)(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    ':hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    }
}))

export const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
        <Box sx={{ pt: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', columnGap: 2 }}>
            <NavButton
                onClick={() => swiper.slidePrev()}

            >
                <ChevronLeftRoundedIcon />
            </NavButton>
            <NavButton
                onClick={() => swiper.slideNext()}
            >
                <ChevronRightRoundedIcon />
            </NavButton>
        </Box>
    );
};

export default function EffectCoverflowSlider() {

    const theme = useTheme()

    return (
        <CustomSection>
            <FadeRevealAnimation>
                <SectionTitle title='Designs' />
            </FadeRevealAnimation>
            <Container>
                <FadeRevealAnimation>
                    <SwiperBox sx={{ py: 3 }}>
                        <Box className='effectCoverflowSlider-pagination' sx={{ display: 'flex', justifyContent: 'center', columnGap: 1 }}></Box>
                        <Box>
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                initialSlide={1}
                                centeredSlides={true}
                                slidesPerView={1}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1
                                    },
                                    576: {
                                        slidesPerView: 3
                                    }
                                }}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                pagination={{
                                    clickable: true,
                                    el: '.effectCoverflowSlider-pagination'
                                }}
                                loop={true}
                                modules={[EffectCoverflow, Pagination, Navigation, A11y]}
                                className="effectCoverflowSlider"
                                style={{
                                    width: '100%',
                                    paddingTop: theme.spacing(12)
                                }}
                            >
                                {
                                    designs.map((designImg, index) => {
                                        return (
                                            <SwiperSlide className='effectCoverflowSlider-slide' style={{
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                width: '300px',
                                                height: '300px'
                                            }} key={index}>
                                                <img src={designImg} style={{
                                                    display: 'block',
                                                    width: '100%'
                                                }} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                                <SwiperNavButtons />
                            </Swiper>
                        </Box>
                    </SwiperBox>
                </FadeRevealAnimation>
            </Container>
        </CustomSection>
    );
}
