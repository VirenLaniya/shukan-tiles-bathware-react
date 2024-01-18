import React, { useState, useReducer } from 'react'

//#region MUI Imports
import { Container, Grid, Box } from '@mui/material'
//#endregion

//#region Component Imports
import CollectionBox from './CollectionBox'
import ProductsBox from './ProductsBox'
import CustomSection from '../common/CustomSection'
//#endregion

//#region Data Imports
import { collections } from '../../../data/products'
//#endregion



const ProductCollectionContainer = ({ filter }) => {
    const defaultCollection = collections[0].id;
    const [currentCollection, setCurrentCollection] = useState(defaultCollection)

    const handleChangeCollection = (collectionId) => {
        setCurrentCollection(collectionId);
    }

    return (
        <Box sx={{ pb: 12 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <CollectionBox onChangeCollection={handleChangeCollection} currentCollection={currentCollection} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <ProductsBox collectionId={currentCollection} filter={filter} />
                    </Grid>
                </Grid>
            </Container>
        </Box>

    )
}

export default ProductCollectionContainer