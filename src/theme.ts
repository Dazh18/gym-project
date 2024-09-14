import { extendTheme, type ThemeConfig, } from '@chakra-ui/react'

// Configuración del modo de color
const config: ThemeConfig = {
  initialColorMode: 'dark', // Modo inicial
  useSystemColorMode: false, 
}


const theme = extendTheme({
  config,
  styles: {
    global:(props)=>( {
      'html, body': {
        fontFamily: 'Arial, sans-serif',
        color: 'rgba(255, 255, 255, 0.87)',
        height: '100%',
        margin: 3,
        lineHeight: '1.1',
        display: 'flex',
        justifyContent: 'center',  
        backgroundColor: props.colorMode === 'dark' ? '#000000' : '#ffffff', // Cambiar el color de fondo según el modo
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
        lineHeight: '1.1',
        padding: '3px',
        columnGap: '20px',
        
      },
      li: {
        margin: '5px',
        borderRadius: '8px',
        border: '2px solid blue',
        padding: '3px',
        
        backgroundColor: '',
        cursor: 'pointer',
        transition: 'border-color 0.25s',
        listStyleType: 'none',
        _hover: {
          borderColor: '#48BB78',
        },
      },
      '.habit':{
        display: 'grid',
        gridTemplateColumns: 'auto auto',
      }
    }),
  },
})

export default theme
