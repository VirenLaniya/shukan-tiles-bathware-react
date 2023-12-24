import React from 'react'
import {Box} from '@mui/material'
import {styled} from '@mui/material/styles'

const CustomSection = ({children, ...other}) => {
    const CustomBox = styled(Box)(({theme})=>({
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12)
    }))
  return (
    <CustomBox {...other}>
        {children}
    </CustomBox>
  )
}

export default CustomSection