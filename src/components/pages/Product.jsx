import React from 'react'

//#region React Router Imports
import { useParams } from 'react-router-dom'
//#endregion

//#region MUI Imports
import { Box } from '@mui/material'
//#endregion

//#region Component Imports
import ProductHeadSection from '../modules/product/ProductHeadSection';
import ProductContentSection from '../modules/product/ProductContentSection';
//#endregion

const Product = () => {

  const { id } = useParams();
  return (
    <Box>
      <ProductHeadSection productId={id} />
      <ProductContentSection productId={id} />
    </Box>
  )
}

export default Product