import React from 'react'
import Typography from "@mui/material/Typography";

const SectionTitle = ({children, title, ...other}) => {
  return (
    <Typography variant="h4" sx={{textAlign: 'center', textTransform: 'uppercase', pb: 12}} {...other}>{title}</Typography>
  )
}

export default SectionTitle