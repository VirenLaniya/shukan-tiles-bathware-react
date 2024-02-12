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
import { useTheme, useMediaQuery, Typography, } from '@mui/material';
//#endregion

//#region Component Imports
import { getCollectionById } from '../../utils/helper/productCollectionHelper';
//#endregion

//#region Data Imports
import { products } from '../../data/products'
import { search } from '../../data/common'
//#endregion

const NotFound = () => {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontWeight: '500', fontSize: 17, letterSpacing: 2, textAlign: 'center' }}>{search.notFoundMsg}</Typography>
        </Box>
    )
}

const SearchResult = ({ searchText, toggleSearchDrawer }) => {

    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))

    return (
        <Container maxWidth='md' sx={{ overflowY: 'scroll', "::-webkit-scrollbar": { display: 'none' } }}>
            {
                filteredProducts.length > 0 ?
                    <ImageList sx={{ width: '100%', "::-webkit-scrollbar": { display: 'none' } }} cols={matchDownMd ? 2 : 3} gap={matchDownMd ? 8 : 24}>
                        {filteredProducts.map((product) => (
                            // <Link key={product.id} to={`/collection/product/${product.id}`} underline='none' sx={{ width: '100%' }}>
                            <Box sx={{ width: '100%' }}>
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
                                        subtitle={getCollectionById(product.collectionId).title}
                                        // position="below"
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
                            </Box>
                            // </Link>
                        ))}
                    </ImageList>
                    :
                    <NotFound />
            }
        </Container>
    )
}

export default SearchResult