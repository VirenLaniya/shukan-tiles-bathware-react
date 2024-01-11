import React from 'react'

//#region MUI Imports
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useTheme, Link } from '@mui/material';
//#endregion

//#region Data Imports
import { products } from '../../data/products'
//#endregion

const SearchResult = ({ searchText }) => {

    const theme = useTheme();

    return (
        <Container maxWidth='md' sx={{ height: '60vh', overflowY: 'scroll', "::-webkit-scrollbar": { display: 'none' } }}>
            <ImageList sx={{ width: '100%' }} cols={3} gap={24}>
                {products.map((product) => (
                    <Link href='#' underline='none'>
                        <ImageListItem key={product.name} sx={{
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
                                    height: '160px',
                                    objectFit: 'cover'
                                }}
                            />
                            <ImageListItemBar
                                className='productItemBar'
                                title={product.name}
                                subtitle={product.description}
                                position="below"
                                sx={{
                                    p: 1,
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
                    </Link>
                ))}
            </ImageList>
        </Container>
    )
}

export default SearchResult