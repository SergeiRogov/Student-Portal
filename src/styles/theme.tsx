import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { ButtonStyles as Button } from './components/ButtonStyles'

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

export const theme = extendTheme({
    colors: {
        primary: {
            light: "#0F5CB6",
            dark: "#A9C1FF",
        },
        secondary: {
            light: "#0F5CB6",
            dark: "#A9C1FF",
        },
    },
    components: {
        Button
    },
    config
});
