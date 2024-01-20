import React from 'react'

//#region React Router Imports
import { Link } from 'react-router-dom'
//#endregion

//#region MUI Imports
import { Typography, Stack, Breadcrumbs } from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'
//#endregion

//#region Component Imports
import CustomSection from '../common/CustomSection'
import SectionTitle from '../common/SectionTitle'
//#endregion

//#region Data Imports
import { getProductById, getCollectionById } from '../../../utils/helper/productCollectionHelper'
//#endregion

//#region Style Customization
const CustomLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.grey[600],
    ':hover': {
        color: theme.palette.primary.main
    }
}));
//#endregion

//#region Helper Functions
import { pages } from '../../../data/common'
//#endregion

const ProductHeadSection = ({ productId }) => {

    const theme = useTheme();

    const product = getProductById(productId)

    const breadcrumbs = [
        <CustomLink key="1" to={pages[0].path}>
            {pages[0].title}
        </CustomLink>,
        <CustomLink
            underline="hover"
            key="2"
            color="inherit"
            to={pages[2].path}
            style={{ textDecoration: 'none' }}
        >
            {pages[2].title}
        </CustomLink>,
        <Typography key="3" sx={{color: theme.palette.primary.main}}>
            {getCollectionById(product.collectionId).title}
        </Typography>,
    ];

    return (
        <CustomSection sx={{ backgroundColor: theme.palette.background.paper }}>
            <SectionTitle title={product.name} sx={{ pb: 3 }} />
            <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" >
                <Breadcrumbs separator="-" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
        </CustomSection>
    )
}

export default ProductHeadSection