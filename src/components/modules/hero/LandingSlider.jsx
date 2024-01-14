import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { Box, Button, Card, CardContent, Typography, useTheme } from '@mui/material'

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules'

// Styles
import './styles/LandingSlider.css'

// Assets
import { landingSlider } from '../../../data/hero'
import SlideContentLS from './SlideContentLS'

const LandingSlider = () => {
    const theme = useTheme();

    return (
        <Box sx={{
            width: '100%',
            height: { xs: '40vh', md: '100vh' },
            // borderRadius: '0% 0% 40% 0% / 0% 0% 70% 0%',
            // borderRadius: '0% 0% 100% 0% / 0% 40% 25% 0%;',
            overflow: 'hidden'
        }}>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false
                }}
                slidesPerView={1}
                effect={'fade'}
                // creativeEffect={{
                //     prev: {
                //         shadow: true,
                //         translate: [0, 0, -400],
                //     },
                //     next: {
                //         translate: ['100%', 0, 0],
                //     },
                // }}
                modules={[EffectFade, Autoplay]}
            >
                {
                    landingSlider.map((slide, index) => (
                        <SwiperSlide key={index} style={{ backgroundColor: 'white' }}>
                            <Box sx={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '100%',
                                height: '100vh', // Adjust the height as needed
                                position: 'relative',
                            }}>
                                <Card sx={{
                                    px: {xs: 1, md: 10},
                                    display: 'flex',
                                    alignItems: 'center',
                                    textAlign: 'left',
                                    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    // background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 35%, rgba(255,255,255,0) 85%)',
                                    // background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.8) 0, rgba(255,255,255,0) 100%)',
                                    background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.85) 0, rgba(0,0,0,0) 75%)',
                                    height: '100%',
                                }}>
                                    <SlideContentLS slide={slide} />
                                </Card>
                            </Box>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Box>
    )
}

export default LandingSlider