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
//#endregion

const ConnectButton = () => {
    const theme = useTheme();
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
                <Grow in={!trigger || checked}>
                    <Link href='#'>
                        <IconButton sx={{ border: `2px solid #1877F2` }}>
                            <FacebookRoundedIcon sx={{ color: '#1877F2' }} />
                        </IconButton>
                    </Link>
                </Grow>
                {/* Conditionally applies the timeout prop to change the entry speed. */}
                <Grow
                    in={!trigger || checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 500 } : {})}
                >
                    <Link href='#'>
                        <IconButton sx={{ border: '2px solid #c13584' }}>
                            <InstagramIcon sx={{ color: '#c13584' }} />
                        </IconButton>
                    </Link>
                </Grow>
                <Grow
                    in={!trigger || checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 1000 } : {})}
                >
                    <Link href='#'>
                        <IconButton sx={{ border: '2px solid #25d366' }}>
                            <WhatsAppIcon sx={{ color: '#25d366' }} />
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
                        backgroundColor: alpha(theme.palette.accent.second, 0.8),
                        ':hover': {
                            backgroundColor: theme.palette.accent.second
                        }
                    }} />
            </Box>

        </Box>
    );
}

export default ConnectButton;
