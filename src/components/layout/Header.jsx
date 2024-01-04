import * as React from 'react';

//#region React Router Imports
import { NavLink } from "react-router-dom";
//#endregion

//#region MUI Imports
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade'
import { alpha, styled, useTheme } from '@mui/material/styles';
//#endregion

//#region MUI Icons Imports
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUpRounded'
//#endregion

//#region Local Asset Imports
import { companyLogo } from '../../data/common';
//#endregion

//#region Component Imports
import MenuDrawer from './MenuDrawer';
import SearchDrawer from './SearchDrawer';
//#endregion

//#region Style Imports
import './styles/Header.css'
//#endregion

//#region Data Imports
import { pages } from '../../data/common'
//#endregion

import PropTypes from 'prop-types';
import ConnectButton from '../modules/common/ConnectButton';

//#region Style Customization
const CustomNavLink = styled(NavLink)(({ theme }) => ({
  '&.active': {
    // Define your active link styles here
    color: `${theme.palette.common.white}!important`,
    fontWeight: 500
  },
  '&.active::after': {
    backgroundColor: `${theme.palette.common.white}!important`
  }
}));
//#endregion

//#region Helper Functions
function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    target: undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 9999 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({});

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
//#endregion

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

// function ElevationScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//     style: {
//       backgroundColor: trigger ? 'white' : 'black'
//     }
//   });
// }

const Header = (props) => {

  const theme = useTheme();
  const [menuDrawerState, setMenuDrawerState] = React.useState(false);
  const [searchDrawerState, setSearchDrawerState] = React.useState(false);

  const toggleMenuDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setMenuDrawerState(open);
  };

  const toggleSearchDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setSearchDrawerState(open);
  };

  return (
    <>
      <CssBaseline />
      {/* <ElevationScroll {...props}> */}
      <HideOnScroll {...props}>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: 'space-between', height: '90px' }} disableGutters>
              <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleMenuDrawer(true)}
                  color="inherit"
                >
                  <MenuIcon fontSize='inherit' />
                </IconButton>
              </Box>

              <Box sx={{ display: 'flex', mr: 1, width: { xs: '128px', md: '150px' } }}>
                <img src={companyLogo} alt='Company' style={{ maxWidth: '150px', width: '100%', height: 'auto', objectFit: 'contain' }} />
              </Box>

              <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', columnGap: '24px' }}>
                {pages.map((page, index) => (
                  <CustomNavLink to={page.path} className='header-link' key={index} sx={{ color: theme.palette.secondary.main, '::after': { backgroundColor: theme.palette.secondary.main } }}>{page.title}</CustomNavLink>
                ))}
              </Box>

              <Box>
                <IconButton sx={{ display: 'flex', color: theme.palette.primary.contrastText }} size='large' onClick={toggleSearchDrawer(true)}>
                  <SearchRoundedIcon fontSize='inherit' />
                </IconButton>
                <SearchDrawer toggleSearchDrawer={toggleSearchDrawer} searchDrawerState={searchDrawerState} />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      {/* </ElevationScroll> */}
      <Toolbar id='back-to-top-anchor' sx={{ height: '90px' }} />
      <MenuDrawer menuDrawerState={menuDrawerState} toggleMenuDrawer={toggleMenuDrawer} />
      <Box sx={{ position: 'fixed', bottom: 32 + 40, right: 16, zIndex: 9999 }}>
        <ConnectButton />
      </Box>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top" sx={{ backgroundColor: theme => alpha(theme.palette.common.white, 0.6) }}>
          <KeyboardArrowUpIcon sx={{ color: theme => theme.palette.primary.main }} />
        </Fab>
      </ScrollTop>

    </>
  );
}

export default Header