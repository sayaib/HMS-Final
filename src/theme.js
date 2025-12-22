import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0C8346',
      dark: '#096836',
      light: '#43a76e'
    },
    secondary: {
      main: '#1B2433',
      dark: '#141a24',
      light: '#283142'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff'
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#4a4a4a'
    }
  },
  typography: {
    fontFamily: ['Poppins', 'Rubik', 'sans-serif'].join(','),
    h1: { fontWeight: 800, letterSpacing: -0.5 },
    h2: { fontWeight: 700, letterSpacing: -0.3 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 }
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          paddingInline: 20
        }
      }
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backdropFilter: 'blur(8px)'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#0C8346',
          textDecorationColor: '#0C8346'
        }
      }
    }
  }
});

export default theme;
