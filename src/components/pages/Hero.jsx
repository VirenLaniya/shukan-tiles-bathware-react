import React, { useEffect } from 'react'
// import { Navigation } from 'swiper'

//#region MUI Imports
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
//#endregion

//#region Component Imports
import LandingSlider from '../modules/hero/LandingSlider'
import IntroSection from '../modules/hero/IntroSection'
import Introduction from '../modules/hero/Introduction'
// import DiscoverDesigns from '../modules/hero/DiscoverDesigns'
import DiscoverCreations from '../modules/hero/DiscoverCreations'
import Acknowledgement from '../modules/hero/Acknowledgement'
import EffectCoverflowSlider from '../modules/hero/EffectCoverflowSlider'
// import Products from '../modules/hero/Products'
// import WhatWeDo from '../modules/hero/WhatWeDo'
import Statistics from '../modules/hero/Statistics'
// import WhyChooseUs from '../modules/hero/WhyChooseUs'
import Testimonials from '../modules/hero/Testimonials'
// import AwardRecognition from '../modules/hero/AwardRecognition'
//#endregion


const Hero = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box>
      <LandingSlider />
      {/* <IntroSection /> */}
      <Introduction />
      {/* <DiscoverDesigns /> */}
      <DiscoverCreations />
      <Acknowledgement />
      <EffectCoverflowSlider />
      {/* <Products />
      <WhatWeDo /> */}
      {/* <Statistics /> */}
      {/* <WhyChooseUs /> */}
      <Testimonials />
      {/* <AwardRecognition /> */}
    </Box>
  );
}

export default Hero