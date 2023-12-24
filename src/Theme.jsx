import * as React from 'react';
// import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, responsiveFontSizes, alpha } from '@mui/material/styles';

const defaultTheme = createTheme();
const { breakpoints, typography: { pxToRem } } = defaultTheme

const primaryMainColor = '#2e2924';     // Pine Black
const secondaryMainColor = '#fff0e8';   // Linen White
const accentFirstColor = '#ef3340';     // Teal Blue
const accentSecondColor = '#397d8d';    // Venetian Red

let Theme = createTheme({

  typography: {
    fontFamily: `'Open Sans', 'sans-serif'`,
    p: {
      letterSpacing: 1
    },
    button: {
      fontFamily: `'Open Sans', 'sans-serif'`,
      letterSpacing: 2
    },
    h1: {
        fontFamily: `'Raleway', 'sans-serif'`,
        letterSpacing: 4
    },
    h2: {
        fontFamily: `'Raleway', 'sans-serif'`,
        letterSpacing: 4
    },
    h3: {
        fontFamily: `'Raleway', 'sans-serif'`,
        letterSpacing: 4
    },
    h4: {
        fontFamily: `'Raleway', 'sans-serif'`,
        letterSpacing: 4
    },
    h5: {
        fontFamily: `'Raleway', 'sans-serif'`,
        letterSpacing: 4
    },
    h6: {
        fontFamily: `'Raleway', 'sans-serif'`,
        letterSpacing: 4
    }
  },
  palette: {
    primary: {
      main: primaryMainColor,
      contrastText: secondaryMainColor
    },
    secondary: {
      main: secondaryMainColor,
      contrastText: primaryMainColor
    },
    accent: {
        first: accentFirstColor,
        second: accentSecondColor
    }
    // background: {
    //   paper: backgroundColor
    // }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            textTransform: 'none',
            border: `2px solid ${primaryMainColor}`,
            color: primaryMainColor,
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: primaryMainColor,
              color: defaultTheme.palette.common.white
            },
          }
        },
        {
          props: { variant: 'primary', size: 'small' },
          style: {
            textTransform: 'none',
            border: `2px solid ${primaryMainColor}`,
            color: primaryMainColor,
            borderRadius: '8px',
            padding: '6px 12px',
            fontSize: defaultTheme.typography.pxToRem(13),
            '&:hover': {
              backgroundColor: primaryMainColor,
              color: defaultTheme.palette.common.white
            },
          }
        },
        {
          props: { variant: 'primary', size: 'large' },
          style: {
            textTransform: 'none',
            border: `2px solid ${primaryMainColor}`,
            color: primaryMainColor,
            borderRadius: '8px',
            padding: '8px 16px',
            fontSize: defaultTheme.typography.pxToRem(15),
            '&:hover': {
              backgroundColor: primaryMainColor,
              color: defaultTheme.palette.common.white
            },
          }
        },
        {
          props: { variant: 'secondary' },
          style: {
            textTransform: 'none',
            border: `2px solid ${secondaryMainColor}`,
            color: secondaryMainColor,
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: secondaryMainColor,
              color: primaryMainColor
            }
          }
        }
      ]
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // backgroundColor: backgroundColor, // Background color
          // borderRadius: '16px', // Border radius
          borderRadius: '8px', // Border radius
          '& label': {
            color: primaryMainColor, // Label color
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              // borderColor: 'transparent', // Border color
            },
            '&:hover fieldset': {
              // borderColor: 'transparent', // Hover border color
            },
            '&.Mui-focused fieldset': {
              // borderColor: primaryMainColor, // Focus border color,
            }
          }
        }
      }
    },

    MuiFilledInput: {
      styleOverrides: {
        root: {
          overflow: 'hidden',
          borderRadius: '8px',
          // backgroundColor: '#F3F6F9',
          backgroundColor: secondaryMainColor,
          border: '1px solid',
          borderColor: 'transparent',
          transition: defaultTheme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
          ]),
          '&:hover': {
            backgroundColor: 'transparent',
            // borderColor: primaryMainColor
            borderColor: defaultTheme.palette.text.disabled
          },
          '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: `${alpha(primaryMainColor, 0.25)} 0 0 0 2.5px`,
            borderColor: primaryMainColor,
          },
          '.MuiInputLabel-root.Mui-focused ': {
            fontSize: 5
          },
          "&&&:before": {
            borderBottom: "none"
          },
          "&&:after": {
            borderBottom: "none"
          },
        }
      }
    }
  }
});

Theme = responsiveFontSizes(Theme);

export default Theme;
