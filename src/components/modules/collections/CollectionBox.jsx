import React from 'react'

//#region MUI Imports
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles'
//#endregion

//#region MUI Icons Imports
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
//#endregion

//#region Data Imports
import { collections } from '../../../data/products';
//#endregion

const CollectionBox = ({ onChangeCollection, currentCollection }) => {

    const theme = useTheme();

    return (
        <Box sx={{ width: '100%', maxWidth: 360, background: theme.palette.background.default }}>
            {/* <nav aria-label="main mailbox folders"> */}
            <List>
                {
                    collections.map((collection) => {
                        const isCurrentCollection = currentCollection == collection.id;

                        return (
                            <React.Fragment key={collection.id}>
                                <ListItem sx={{ color: isCurrentCollection ? theme.palette.common.black : theme.palette.grey[600] }} disablePadding>
                                    <ListItemButton onClick={() => onChangeCollection(collection.id)}>
                                        <ListItemText primary={collection.title} sx={{ fontWeight: isCurrentCollection ? '600' : ''}} />
                                        <ChevronRightRoundedIcon />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                            </React.Fragment>
                        )
                    })
                }
            </List>
            {/* </nav> */}
        </Box>
    )
}

export default CollectionBox