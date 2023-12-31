import React from 'react'

//#region MUI Imports
import { Container, TextField, Box, Grid, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import CustomSection from '../common/CustomSection'
import SectionTitle from '../common/SectionTitle'
import FadeRevealAnimation from '../common/FadeRevealAnimation'
//#endregion

//#region Data Imports
import { contactForm } from '../../../data/contact'
//#endregion

//#region Style Customization
const CustomTextField = styled(TextField)(({ theme }) => ({
  width: '100%'
}))
//#endregion

const ContactForm = () => {
  return (
    <CustomSection>
      <FadeRevealAnimation>
        <SectionTitle title={contactForm.title} />
      </FadeRevealAnimation>
      <Container maxWidth='md'>
        {/* <TextField variant='outlined' type='text' label="Something" /> */}
        <FadeRevealAnimation>
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <CustomTextField variant='filled' type='text' label="Something" />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomTextField variant='filled' type='text' label="Something" />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomTextField variant='filled' type='text' label="Something" />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomTextField variant='filled' type='text' label="Something" />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField variant='filled' type='text' multiline rows={4} label="Something" />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <Button variant='contained' size='medium'>Submit</Button>
                  <Button variant='outlined' size='medium'>Reset</Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </FadeRevealAnimation>
      </Container>
    </CustomSection>

  )
}

export default ContactForm