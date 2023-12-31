import React from 'react'
import Typography from "@mui/material/Typography";

const SectionTitle = ({children, title, sx, ...other}) => {
  sx = sx ?? {}
  return (
    <Typography variant="h4" sx={{textAlign: 'center', textTransform: 'uppercase', pb: 12, ...sx}} {...other}>{title}</Typography>
  )
}

export default SectionTitle