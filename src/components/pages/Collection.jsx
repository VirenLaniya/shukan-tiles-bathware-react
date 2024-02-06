import React, { useEffect } from 'react'

//#region MUI Imports
import Box from '@mui/material/Box'
//#endregion

//#region Component Imports
import MainCollectionContainer from '../modules/collections/MainCollectionCotainer'
//#endregion

const Collections = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <Box>
      <MainCollectionContainer />
    </Box>
  )
}

export default Collections