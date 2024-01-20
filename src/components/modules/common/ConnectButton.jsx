import * as React from 'react';

//#region MUI Imports
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import { IconButton, Checkbox, Link, useScrollTrigger } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles'
//#endregion

//#region MUI Icons Imports
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LanRoundedIcon from '@mui/icons-material/LanRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
//#endregion

//#region Data Imports
import { connect } from '../../../data/common'
//#endregion


//#region Helper functions
import getPlatformConnectLink from '../../../utils/helper/getPlatformConnectLink'
//#endregion

const ConnectButton = () => {
    const theme = useTheme();

    const facebookColor = '#1877F2'
    const instagramColor = '#c13584'
    const whatsAppColor = '#25d366'

    const [checked, setChecked] = React.useState(false);

    const trigger = useScrollTrigger({
        target: undefined,
        disableHysteresis: true,
        threshold: 100
    });

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', rowGap: 1 }}>
            <Box sx={{ position: !trigger ? 'fixed' : 'static', display: 'flex', flexDirection: 'column-reverse', justifyContent: 'center', alignItems: 'center', rowGap: 1 }}>
                {/* <Grow in={!trigger || checked}>
                    <Link href={getPlatformConnectLink('facebook')} target='_blank'>
                        <IconButton sx={{ width: '42px', height: '42px', background: alpha(facebookColor, 0.7), ':hover': { background: facebookColor } }}>
                            <FacebookRoundedIcon sx={{ color: theme.palette.common.white }} />
                        </IconButton>
                    </Link>
                </Grow> */}
                {/* Conditionally applies the timeout prop to change the entry speed. */}
                <Grow
                    in={!trigger || checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 500 } : {})}
                >
                    <Link href={getPlatformConnectLink('instagram')} target='_blank'>
                        <IconButton sx={{ width: '42px', height: '42px', background: alpha(instagramColor, 0.7), ':hover': { background: instagramColor } }}>
                            <InstagramIcon sx={{ color: theme.palette.common.white }} />
                        </IconButton>
                    </Link>
                </Grow>
                <Grow
                    in={!trigger || checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 1000 } : {})}
                >
                    <Link href={getPlatformConnectLink('whatsapp')} target='_blank'>
                        <IconButton sx={{ width: '42px', height: '42px', background: alpha(whatsAppColor, 0.7), ':hover': { background: whatsAppColor } }}>
                            <WhatsAppIcon sx={{ color: theme.palette.common.white }} />
                        </IconButton>
                    </Link>
                </Grow>
                <Grow
                    in={!trigger || checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 1500 } : {})}
                >
                    <Link href={'mailto:' + getPlatformConnectLink('mail')} target='_blank'>
                        <IconButton sx={{ width: '42px', height: '42px', background: alpha(theme.palette.primary.main, 0.7), ':hover': { background: theme.palette.primary.main } }}>
                            <MailOutlineRoundedIcon sx={{ color: theme.palette.common.white }} />
                        </IconButton>
                    </Link>
                </Grow>
            </Box>
            <Box>
                <Checkbox icon={<LanRoundedIcon />}
                    checkedIcon={<CloseRoundedIcon />}
                    onChange={handleChange}
                    sx={{
                        visibility: trigger ? 'visible' : 'hidden',
                        color: theme.palette.primary.main,
                        backgroundColor: alpha(theme.palette.secondary.main, 0.8),
                        ':hover': {
                            backgroundColor: theme.palette.secondary.main
                        }
                    }} />
            </Box>

        </Box>
    );
}

export default ConnectButton;
