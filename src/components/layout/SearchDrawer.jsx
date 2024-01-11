import * as React from 'react';

//#region MUI Imports
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField';
import { useTheme, IconButton } from '@mui/material';
//#endregion

//#region MUI Icons Imports
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
//#endregion

//#region Component Imports
import SearchResult from './SearchResult';
//#endregion

export default function SearchDrawer({ toggleSearchDrawer, searchDrawerState }) {

    const theme = useTheme();

    const searchContainer = () => (
        <Box
            sx={{ width: 'auto', pt: theme.spacing(6), pb: theme.spacing(12), boxSizing: 'border-box', height: '100vh', overflow: 'hidden' }}
            role="presentation"
        >
            {/* Search Container */}
            <Container maxWidth='sm'>
                <Box sx={{ pb: theme.spacing(6), display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={toggleSearchDrawer(false)}>
                        <CloseRoundedIcon />
                    </IconButton>
                </Box>
                <Box sx={{ pb: theme.spacing(6), display: 'flex', alignItems: 'stretch', gap: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, backgroundColor: theme.palette.primary.main }}>
                        <SearchRoundedIcon sx={{ color: theme.palette.primary.contrastText }} />
                    </Box>
                    <TextField id="filled-basic"
                        hiddenLabel
                        placeholder='Search...'
                        variant="filled"
                        fullWidth />
                </Box>
            </Container>
            
            <SearchResult />
            
        </Box>
    );

    return (
        <Drawer
            anchor='top'
            open={searchDrawerState}
            onClose={toggleSearchDrawer(false)}
        >
            {searchContainer()}
        </Drawer>
    );
}