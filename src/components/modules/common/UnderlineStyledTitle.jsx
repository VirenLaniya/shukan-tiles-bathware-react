import React, { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Typography, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'

const UnderlineStyledTitle = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const theme = useTheme();

  const textLength = String(props.children).length;

  // const CustomTypography = styled(Typography)(({ theme }) => ({
  //   '&::after': {
  //     content: '""',
  //     display: 'block',
  //     height: 3,
  //     backgroundColor: theme.palette.secondary.main,
  //     borderRadius: 8,
  //     width: isInView ? theme.spacing(textLength*2) : 0,
  //     marginTop: 11,
  //     transition: ".5s ease"
  //   }
  // }))

  return (
    <Typography {...props} ref={ref} sx={{
      // transform: isInView ? "none" : "translateX(-200px)",
      // opacity: isInView ? 1 : 0,
      transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
      '&::after': {
        content: '""',
        display: 'block',
        height: 3,
        backgroundColor: theme.palette.accent.second,
        borderRadius: 8,
        width: isInView ? theme.spacing(textLength * 2) : 0,
        marginTop: 2,
        transition: "1s ease 0.5s"
      }
    }}>{props.children}</Typography>
  )
}

export default UnderlineStyledTitle