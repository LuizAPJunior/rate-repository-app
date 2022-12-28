import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      appBarBg: '#24292e'
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      main: Platform.select({
        ios: 'Arial',
        default: 'System',
        android: 'Roboto'
      })
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
  };
  
export default theme;