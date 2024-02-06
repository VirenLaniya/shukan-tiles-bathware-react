import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import PageStarter from '../modules/common/PageStarter'
import { pageStarter } from '../../data/about'
// import ImageGallery from '../modules/about/ImageGallery'
import IntroSection from '../modules/about/IntroSection'
import Fundamentals from '../modules/about/Fundamentals'
import GroupOfCompanies from '../modules/about/GroupOfCompanies'
import MadeInIndia from '../modules/about/MadeInIndia'
import MissionVision from '../modules/about/MissionVision'
import Message from '../modules/about/Message'

const About = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <Box>
      <PageStarter background={pageStarter.background} title={pageStarter.title} />
      {/* <ImageGallery /> */}
      <IntroSection />
      <GroupOfCompanies />
      <Fundamentals />
      <MissionVision />
      <Message />
      <MadeInIndia />
    </Box>
  )
}

export default About