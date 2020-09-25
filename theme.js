import { darken, lighten } from '@theme-ui/color';

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: '#000',
    background: '#f7f7f7',
    primary: '#11e',
    secondary: '#c0c',
    highlight: '#e0e',
    muted: '#e5e5e5',
    muted2: '#ccd',
    modes: {
      dark: {
        text: '#fff',
        background: '#111517',
        primary: '#0fc',
        secondary: '#0cf',
        highlight: '#f0c',
        muted: '#223',
        muted2: '#556',
      },
    },
  },
  fonts: {
    body: '"Avenir Next", system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  buttons: {
    primary: {
      fontFamily: 'body',
      borderRadius: 999,
      outline: 'none',
      cursor: 'pointer',
      fontWeight: '400',
      transition: 'all 140ms ease-in-out',
      ':hover': {
        backgroundColor: darken('primary', 0.1),
      },
      ':active': {
        outline: 'none',
        transform: 'scale(0.85)',
      },
    },
    outlined: {
      color: 'primary',
      background: 'transparent',
      borderWidth: '3px',
      borderStyle: 'solid',
    },
    secondary: {
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        bg: 'dark',
      },
    },
  },
  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '.2em',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    display: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontSize: [6, 7, 8],
      fontWeight: 'display',
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',
    },
  },
  styles: {
    root: {
      transition: 'background-color 0.4s ease-out',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    container: {
      px: [3, 5],
    },
    a: {
      color: 'text',
      textDecoration: 'none',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
    hr: {
      color: 'muted',
    },
    navlink: {
      variant: 'text.caps',
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus': {
        color: 'primary',
      },
    },
    navitem: {
      variant: 'styles.navlink',
      display: 'inline-flex',
      alignItems: 'center',
      fontWeight: 'bold',
    },
  },
};

export default theme;
