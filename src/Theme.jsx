import * as React from 'react';
// import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, responsiveFontSizes, alpha } from '@mui/material/styles';

const defaultTheme = createTheme();
const { breakpoints, typography: { pxToRem } } = defaultTheme

// const primaryMainColor = '#2e2924';     // Pine Black
// const secondaryMainColor = '#fff0e8';   // Linen White
// const accentFirstColor = '#ef3340';     // Teal Blue
// const accentSecondColor = '#397d8d';    // Venetian Red

const primaryMainColor = '#003334';     
const secondaryMainColor = '#dead24';
const accentFirstColor = '#ffffff';
const accentSecondColor = '#2C3333';

const primaryPalette = {
  light: '#335b5c',
  main: '#003334',
  dark: '#002324',
  contrastText: '#fff', // White
}

const secondaryPalette = {
  light: '#e4bd4f',
  main: '#dead24',
  dark: '#9b7919',
  contrastText: '#003334',
}

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
    // primary: {
    //   main: primaryMainColor,
    //   contrastText: accentFirstColor
    // },
    // secondary: {
    //   main: secondaryMainColor,
    //   contrastText: primaryMainColor,
    //   light: '#fcf7e9'
    // },
    // accent: {
    //     first: accentFirstColor,
    //     second: accentSecondColor
    // }
    // background: {
    //   paper: backgroundColor
    // }

    primary: primaryPalette,
    secondary: secondaryPalette,
    background: {
      default: '#ffffff',
      // paper: '#fcf7e9'
      paper: defaultTheme.palette.grey[100]
    }
  },

  components: {
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 20,
          paddingRight: 20
        },
        sizeMedium: {
          paddingTop: 12,
          paddingBottom: 12,
          paddingLeft: 30,
          paddingRight: 30,
          fontSize: 16
        },
        sizeLarge: {
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 40,
          paddingRight: 40,
          fontSize: 17
        },
        root: {
          borderRadius: 0
        },
        containedPrimary: {
          position: 'relative',
          // backgroundColor: secondaryPalette.main,
          // color: secondaryPalette.contrastText,
          ':hover': {
            backgroundColor: primaryPalette.dark,
            // color: primaryPalette.dark
          },
          // '::before': {
          //   content: "''",
          //   display: 'block',
          //   position: 'absolute',
          //   top: 0,
          //   left: 0,
          //   width: '100%',
          //   height: 0,
          //   backgroundColor: accentSecondColor,
          //   transition: 'all .5s',
          //   mixBlendMode: 'difference'
          // },
          // ':hover::before': {
          //   height: '100%'
          // }
        },
        outlinedPrimary: {
          borderWidth: 2,
          ':hover': {
            borderWidth: 2
          }
        }
      },

      variants: [
        {
          props: { variant: 'primary' },
          style: {
            textTransform: 'none',
            border: `2px solid ${primaryMainColor}`,
            color: defaultTheme.palette.common.white,
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: secondaryPalette.main,
              color: primaryPalette.main
            },
          }
        },
        {
          props: { variant: 'primary', size: 'small' },
          style: {
            textTransform: 'none',
            border: `2px solid ${primaryMainColor}`,
            color: defaultTheme.palette.common.white,
            borderRadius: '8px',
            padding: '6px 12px',
            fontSize: defaultTheme.typography.pxToRem(13),
            '&:hover': {
              backgroundColor: secondaryPalette.main,
              color: primaryPalette.main
            },
          }
        },
        {
          props: { variant: 'primary', size: 'large' },
          style: {
            textTransform: 'none',
            border: `2px solid ${primaryMainColor}`,
            color: defaultTheme.palette.common.white,
            borderRadius: '8px',
            padding: '8px 16px',
            fontSize: defaultTheme.typography.pxToRem(15),
            '&:hover': {
              backgroundColor: secondaryPalette.main,
              color: primaryPalette.main
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
              backgroundColor: secondaryPalette.main,
              color: primaryPalette.main
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
          borderRadius: 0,
          // backgroundColor: '#F3F6F9',
          // backgroundColor: secondaryMainColor,
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
