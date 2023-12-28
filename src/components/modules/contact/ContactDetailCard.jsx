import React from 'react'

//#region MUI Imports
import { Card, CardContent, Typography } from '@mui/material'
//#endregion

const ContactDetailCard = ({ children, contact }) => {
    return (
        <Card sx={{
            boxShadow: `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;`,
            borderRadius: 4,
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
                    <contact.icon sx={{mr: 1}} /> {contact.title}
                </Typography>
                {
                    contact.content.map((item, index) => {
                        return (
                            <Typography key={index} variant="body2" color="text.secondary" sx={{ lineHeight: 2 }}>
                                {item}
                            </Typography>
                        )
                    })
                }

            </CardContent>
        </Card>
    )
}

export default ContactDetailCard