import React from 'react'

//#region MUI Imports
import { Container, Grid } from '@mui/material'
//#endregion

//#region Component Imports
import ContactDetailCard from './ContactDetailCard'
import CustomSection from '../common/CustomSection'
import SectionTitle from '../common/SectionTitle'
import FadeRevealAnimation from '../common/FadeRevealAnimation'
//#endregion

//#region Data Imports
import { contactInformation } from '../../../data/contact'
//#endregion

const ContactDetailsSection = () => {
  return (
    <CustomSection>
      <FadeRevealAnimation>
        <SectionTitle title={contactInformation.title} />
      </FadeRevealAnimation>
      <Container>
        <FadeRevealAnimation>
          <Grid container spacing={4}>
            {
              contactInformation.information.map((contact, index) => {
                return (
                  <Grid item xs={12} md={6} lg={3} key={index}>
                    {/* <ContactDetailCard title={contact.title} cardIcon={contact.icon} content={contact.content} /> */}
                    <ContactDetailCard contact={contact} />
                  </Grid>
                )
              })
            }
          </Grid>
        </FadeRevealAnimation>
      </Container>
    </CustomSection>
  )
}

export default ContactDetailsSection