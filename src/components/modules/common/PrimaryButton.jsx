import React from 'react'

import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    textDecoration: 'none',
    border: `2px solid ${theme.palette.primary.main}`,
    padding: '10px 20px',
    fontSize: '17px',
    fontWeight: 'bold',
    background: 'transparent',
    position: 'relative',
    transition: 'all .5s',
    overflow: 'hidden',

    ':hover': {
        color: 'white'
    },

    '::before': {
        content: "''",
        position: 'absolute',
        height: '100%',
        width: '160%',
        top: 0,
        left: '-40px',
        transform: 'skewX(45deg)',
        backgroundColor: theme.palette.primary.main,
        zIndex: -1,
        transition: 'all 1s'
    },

    ':hover::before': {
        width: '160%'
    }
}))

const PrimaryButton = ({children}) => {
    return (
        <CustomButton>
            {children}
        </CustomButton>
    )
}

export default PrimaryButton