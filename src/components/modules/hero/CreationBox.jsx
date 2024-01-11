import React from "react";

//#region MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles";
//#endregion

const CreationBox = ({ isImageFirst, imageUrl, text }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                height: '400px',
                flexDirection: isImageFirst ? 'row-reverse' : 'row',
                justifyContent: 'start',
                alignItems: 'center',
            }}>
            <Box sx={{
                display: {
                    xs: 'none',
                    md: 'flex'
                },
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                zIndex: 2,
                backgroundColor: theme.palette.common.white
                // backgroundColor: theme.palette.primary.main
                // outline: '4px transparent',
                // border: '1px solid',
                // borderColor: theme.palette.accent.first
            }}>
                {/* <Box sx={{ padding: 2, width: '100%', height: '100%', backgroundColor: theme.palette.common.white}}> */}
                    <Typography variant='h3' sx={{
                        // width: '100%',
                        padding: 6,
                        fontWeight: '500',
                        lineHeight: '1.2',
                        textAlign: 'center',
                        color: theme.palette.primary.main,
                        textTransform: 'uppercase',
                        border: '4px solid',
                        borderColor: theme.palette.primary.main,
                        // backgroundColor: theme.palette.common.white
                    }}>{text}</Typography>
                {/* </Box> */}
            </Box>

            <Box sx={{
                position: 'absolute',
                display: {
                    xs: 'block',
                    md: 'none'
                },
                right: -5,
                bottom: '20%',
                px: 5,
                py: 2,
                zIndex: 2,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.main
            }}>
                {text}
            </Box>

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

export default CreationBox