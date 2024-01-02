import React from 'react'

//#region MUI Imports
import { Card, CardContent, Typography, Link } from '@mui/material'
import { styled } from '@mui/material/styles'
//#endregion

const CustomLink = styled(Link)(({ theme }) => ({
    display: 'block',
    color: theme.palette.text.secondary,
    ':hover': {
        color: theme.palette.secondary.main
    }
}))

const ContactItemContent = ({ contactItem, contactType }) => {
    switch (contactType) {
        case "email":
            const emailLink = `mailto:${contactItem}`
            return (
                <CustomLink href={emailLink} underline="none">
                    {contactItem}
                </CustomLink>
            )
        case "mobile":
            const mobileLink = `tel:${contactItem}`
            return (
                <CustomLink href={mobileLink} underline="none">
                    {contactItem}
                </CustomLink>
            )
        case "website":
            const webLink = contactItem.substr(0, 8) === 'https://' ? contactItem : 'https://' + contactItem
            return (
                <CustomLink href={webLink} underline="none" target='_blank'>
                    {contactItem}
                </CustomLink>
            )
        default:
            return (
                <Typography color="text.secondary" sx={{ lineHeight: 2 }}>
                    {contactItem}
                </Typography>
            )
    }
}

const ContactDetailCard = ({ children, contact }) => {
    return (
        <Card sx={{
            boxShadow: `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;`,
            borderRadius: 0,
            p: 2,
            backgroundColor: 'transparent',
            transition: '0.5s ease',
            height: '100%',
            '*': {
                lineHeight: '210%',
            },
            ':hover': {
                backgroundColor: theme => theme.palette.accent.second,
            },
            ':hover *': {
                color: theme => theme.palette.common.white
            }
        }}>
            {/* <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                /> */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ letterSpacing: 3, display: 'flex', alignItems: 'center' }}>
                    <contact.icon sx={{ mr: 1 }} /> {contact.title}
                </Typography>
                {
                    contact.content.map((item, index) => {
                        return <ContactItemContent contactItem={item} contactType={contact.type} key={index} />
                        // return contactItemContent(item, contact.type)
                    })
                }
            </CardContent>
        </Card>
    )
}

export default ContactDetailCard