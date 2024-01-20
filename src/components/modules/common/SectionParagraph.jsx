import React from 'react'

//#region MUI Imports
import { Typography } from '@mui/material'
//#endregion

const SectionParagraph = ({ children, sx }) => {
    sx = sx ?? {}
    return (
        <Typography variant='p' sx={{ lineHeight: 2, display: 'block', whiteSpace: 'pre-wrap', ...sx }}>{children}</Typography>
    )
}

export default SectionParagraph