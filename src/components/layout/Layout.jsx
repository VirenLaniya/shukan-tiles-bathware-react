import React from 'react'

//#region React Router Imports
import { Outlet } from 'react-router-dom'
//#endregion

//#region MUI Imports
import Box from '@mui/material/Box'
//#endregion

//#region Component Imports
import Header from './Header'
import Footer from './Footer'
//#endregion

const Layout = (props) => {
  return (
    <>
      <Header />
      <Box sx={{ overflow: 'hidden' }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  )
}

export default Layout