import React from 'react'
import { Box, Typography } from '@mui/material'
import PageStarter from '../modules/common/PageStarter'
import ContactForm from '../modules/contact/ContactForm'
// import DividerTitle from '../modules/common/DividerTitle'
import ContactDetailsSection from '../modules/contact/ContactDetailsSection'
import Map from '../modules/contact/Map'
import { pageStarter } from '../../data/contact'

const Contact = () => {
  return (
    <Box>
      <PageStarter background={pageStarter.background} title={pageStarter.title}/>
      {/* <DividerTitle text='Get In Touch' variant='h3' sx={{ my: 6 }} /> */}
      <ContactDetailsSection />
      <Map />
      {/* <DividerTitle text='Write Us A Message' variant='h3' sx={{ my: 6 }} /> */}
      {/* <ContactForm /> */}
    </Box>
  )
}

export default Contact