import React from 'react'
import { Box } from '@mui/material'
import PageStarter from '../modules/common/PageStarter'
import { pageStarter } from '../../data/about'
// import ImageGallery from '../modules/about/ImageGallery'
import IntroSection from '../modules/about/IntroSection'
import Fundamentals from '../modules/about/Fundamentals'
import MadeInIndia from '../modules/about/MadeInIndia'
import MissionVision from '../modules/about/MissionVision'
import Message from '../modules/about/Message'

const About = () => {
  return (
    <Box>
      <PageStarter background={pageStarter.background} title={pageStarter.title} />
      {/* <ImageGallery /> */}
      <IntroSection />
      <Fundamentals />
      <MissionVision />
      <Message />
      <MadeInIndia />
    </Box>
  )
}

export default About