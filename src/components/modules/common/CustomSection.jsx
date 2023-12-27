import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomSection = ({ children, sx, ...other }) => {
  // const CustomBox = styled(Box)(({ theme }) => ({
  //   paddingTop: theme.spacing(12),
  //   paddingBottom: theme.spacing(12)
  // }))
  sx = sx ? sx : {}
  return (
    // <CustomBox {...other}>
    //   {children}
    // </CustomBox>
    <Box sx={{py: 12, ...sx}}>
      {children}
    </Box>
  )
}

export default CustomSection