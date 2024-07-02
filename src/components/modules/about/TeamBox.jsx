import React from "react";

//#region React Router Imports
import { Link } from "react-router-dom";
//#endregion

//#region MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button'
import { useTheme } from "@mui/material/styles";
//#endregion

//#region Component Imports
import SectionParagraph from "../common/SectionParagraph";
//#endregion

import '../common/styles/IsometricBackground.css'
import { pages } from "../../../data/common";

const TeamBox = ({ isImageFirst, imageUrl, designation, name }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                height: { xs: '300px', md: '400px' },
                flexDirection: {
                    xs: 'column-reverse',
                    md: isImageFirst ? 'row-reverse' : 'row', 
                },
                justifyContent: 'start',
                alignItems: 'center',
                my: {
                    xs: 2,
                    md: 0
                }
            }}>

            <Box
                // className='isometric-bg' 
                sx={{
                    display: {
                        xs: 'none',
                        md: 'flex'
                    },
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                    backgroundColor: theme.palette.background.paper
                    // backgroundColor: theme.palette.primary.main
                    // outline: '4px transparent',
                    // border: '1px solid',
                    // borderColor: theme.palette.secondary.main
                }}>
                {/* <Box sx={{ padding: 2, width: '100%', height: '100%', backgroundColor: theme.palette.common.white}}> */}
                <Typography variant='h4' sx={{
                    // width: '100%',
                    p: 6,
                    fontWeight: '500',
                    lineHeight: '1.2',
                    textAlign: 'center',
                    color: theme.palette.primary.main,
                    textTransform: 'uppercase',
                    borderBottom: '4px solid',
                    borderColor: theme.palette.primary.main,
                    backgroundColor: theme.palette.background.paper
                }}>{name}</Typography>
                <SectionParagraph sx={{ px: 6, pt: 6, pb: 3, textAlign: 'center', fontSize: 18, textTransform: 'uppercase' }}>
                    {designation}
                </SectionParagraph>
                {/* <Link to={'/collection'} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="small">Explore</Button>
                </Link> */}
                {/* </Box> */}
            </Box>

            {/* <Link to={'/collection'}> */}
                <Box sx={{
                    width: '100%',
                    display: {
                        xs: 'block',
                        md: 'none'
                    },
                    px: 5,
                    py: 2,
                    borderBottom: `2px solid ${theme.palette.primary.main}`
                    // backgroundColor: theme.palette.primary.main,
                    // color: theme.palette.primary.contrastText
                }}>
                    <Typography sx={{textTransform: 'uppercase', textAlign: 'center', letterSpacing: 3}}>{name}</Typography>
                    <Typography sx={{textAlign: 'center', fontSize: 14, color: theme.palette.grey[600], letterSpacing: 1}}>{designation}</Typography>
                </Box>
            {/* </Link> */}


            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '90vh',
                    // margin: '16px',
                    overflow: 'hidden',
                    zIndex: 1
                }}
            >
                <img src={imageUrl}
                    className='parallax-img'
                    alt="A London skyscraper"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }} />
            </Box>
        </Box>
    );
}

export default TeamBox