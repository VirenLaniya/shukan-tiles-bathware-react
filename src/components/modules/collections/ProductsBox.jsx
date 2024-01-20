import React, { useEffect } from 'react'

//#region React Router Imports
import { Link } from 'react-router-dom'
//#endregion

//#region MUI Imports
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useTheme, useMediaQuery, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
//#endregion

//#region Data Imports
import { products } from '../../../data/products'
import { search } from '../../../data/common'
//#endregion

//#region Style Customization
const CustomLink = styled(Link)(({ theme }) => ({
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '100%',
    textDecoration: 'none',
    color: theme.palette.grey[600],
    ':hover': {
        color: theme.palette.primary.main
    }
}));
//#endregion

const NotFound = () => {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontWeight: '500', fontSize: 17, letterSpacing: 2, textAlign: 'center' }}>{search.notFoundMsg}</Typography>
        </Box>
    )
}

const ProductsContainer = ({ collectionId, filter }) => {

    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));

    filter = filter ?? { searchText: '', filterBy: '' }
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(filter.searchText.toLowerCase()) && product.collectionId == collectionId
    })

    return (
        <Box sx={{ overflowY: 'scroll', "::-webkit-scrollbar": { display: 'none' } }}>
            {
                filteredProducts.length > 0 ?
                    <ImageList sx={{ width: '100%', "::-webkit-scrollbar": { display: 'none' } }} cols={matchDownMd ? 2 : 3} gap={matchDownMd ? 8 : 24}>
                        {filteredProducts.map((product) => (
                            <CustomLink to={`/collection/product/${product.id}`} key={product.id}>
                                <ImageListItem key={product.name} sx={{
                                    width: '100%',
                                    textAlign: 'center',
                                    '&:hover .productItemBar': {
                                        backgroundColor: theme.palette.primary.main,
                                        color: theme.palette.primary.contrastText
                                    },
                                }}>
                                    <img
                                        srcSet={product.image}
                                        src={product.image}
                                        alt={product.name}
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            height: matchDownMd ? '160px' : '192px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <ImageListItemBar
                                        className='productItemBar'
                                        title={product.name}
                                        position="below"
                                        sx={{
                                            p: 1,
                                            '.MuiImageListItemBar-title': {
                                                textTransform: 'uppercase',
                                                pb: 1
                                            },
                                            // backgroundColor: theme.palette.primary.main,
                                            // color: theme.palette.primary.contrastText

                                            // borderLeft: `1px solid ${theme.palette.primary.main}`,
                                            // borderRight: `1px solid ${theme.palette.primary.main}`,
                                            // borderBottom: `1px solid ${theme.palette.primary.main}`,
                                            boxShadow: `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;`,
                                            transition: 'all 0.4s ease'
                                        }}
                                    />
                                </ImageListItem>
                            </CustomLink>
                        ))}
                    </ImageList>
                    :
                    <NotFound />
            }
        </Box>
    )
}

export default ProductsContainer