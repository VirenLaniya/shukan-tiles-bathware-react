import React from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'


const CustomTypographyTitle = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase', 
    columnGap: theme.spacing(3),
    fontWeight: '500', 
    letterSpacing: 3,
    color: theme.palette.primary.main,
    '&::before': {
        content: '""',
        display: 'block',
        height: theme.spacing(0.5),
        // width: '100%',
        flexGrow: 1,
        borderRadius: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    '&::after': {
        content: '" "',
        display: 'block',
        height: theme.spacing(0.5),
        flexGrow: 1,
        borderRadius: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    }
}))

const DividerTitle = ({text, variant, sx}) => {
    return (
        <CustomTypographyTitle variant={variant} sx={sx ? {...sx} : {}}>{text}</CustomTypographyTitle>
    )
}

export default DividerTitle