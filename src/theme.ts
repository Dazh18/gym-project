import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// Configuración del modo de color
const config: ThemeConfig = {
  initialColorMode: 'dark', // Modo inicial
  useSystemColorMode: false, 
}


const theme = extendTheme({
  config,
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Arial, sans-serif',
        color: 'rgba(255, 255, 255, 0.87)',
        height: '100%',
        margin: 3,
        lineHeight: '1.1',
        display: 'flex',
        justifyContent: 'center',
      },
      h1: {
        fontSize: '3.2em',
        margin: '8px'
      },
      h2: {
        fontSize: '2.2em',
        margin: '8px'
      },
      ul: {
        textAlign: 'center', 
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        lineHeight: '1.1',
        padding: '3px',
        columnGap: '20px'
      },
      li: {
        margin: '5px',
        borderRadius: '8px',
        border: '2px solid blue',
        padding: '3px',
        backgroundColor: '',
        cursor: 'pointer',
        transition: 'border-color 0.25s',
        _hover: {
          borderColor: '#48BB78',
        },
      },
    },
  },
})

export default theme
