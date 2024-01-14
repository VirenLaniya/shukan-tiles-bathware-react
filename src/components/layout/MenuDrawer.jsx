import * as React from 'react';

//#region React Router Imports
import { Link, NavLink } from 'react-router-dom';
//#endregion

//#region MUI Imports
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material';
//#endregion

//#region MUI Icon Imports
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
//#endregion

//#region Data Imports
import { pages, connect } from '../../data/common';
//#endregion

//#region Style Customization
const CustomNavLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    letterSpacing: '3px',
    '&.active': {
        // Define your active link styles here
        color: `${theme.palette.secondary.main}!important`, // Change this to your desired style
    },
}));
//#endregion

//#region Helper Functions
const Connect = (platform, link, index) => {

    const iconFontSize = '28px';
    const icon = () => {
        switch (platform) {
            case "linkedin":
                return <LinkedInIcon sx={{ fontSize: iconFontSize }} />;
            case "facebook":
                return <FacebookRoundedIcon sx={{ fontSize: iconFontSize }} />
            case "instagram":
                return <InstagramIcon sx={{ fontSize: iconFontSize }} />
            case "whatsapp":
                return <WhatsAppIcon sx={{ fontSize: iconFontSize }} />
            default:
                return;
        }
    }

    return (
        <Link href={link} target="_blank" key={index}>
            <IconButton aria-label={platform} color="primary" sx={{ width: '50px', height: '50px' }}>
                {icon()}
            </IconButton>
        </Link>
    )
}
//#endregion

const MenuDrawer = ({ menuDrawerState, toggleMenuDrawer }) => {

    const theme = useTheme();

    // const toggleDrawer = (open) => (event) => {
    //     console.log("Toggle drawer closing!" + open);
    //     props.toggleMenuDrawer(open)
    // }

    const list = () => (
        <Box
            sx={{ width: 300, py: 4, px: 1, backgroundColor: theme.palette.background.default, height: '100%' }}
            role="presentation"
            onClick={toggleMenuDrawer(false)}
            onKeyDown={toggleMenuDrawer(false)}
        >
            <List>
                {pages.map((page, index) => (
                    <CustomNavLink to={page.path} key={index}>
                        <ListItem key={index}>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={page.title} />
                            </ListItemButton>
                        </ListItem>
                    </CustomNavLink>
                ))}
            </List>
            <Divider />
            <Box sx={{ textAlign: 'center', py: 4 }}>
                {
                    connect.map((item, index) => {
                        return (
                            Connect(item.platform, item.link, index)
                        )
                    })
                }
            </Box>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <Drawer
                    anchor='left'
                    open={menuDrawerState}
                    onClose={toggleMenuDrawer(false)}>
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

export default MenuDrawer