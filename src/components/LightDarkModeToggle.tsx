import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

export const LightDarkModeToggle = () => {
    const { toggleColorMode } = useColorMode();

    return (
      <>
        <IconButton 
            variant='outline'
            icon={ useColorModeValue(<SunIcon />, <MoonIcon />) }
            size='md' 
            aria-label="Color mode switcher"
            onClick={ toggleColorMode }>
          Toggle Mode
        </IconButton>
      </>
    )
}
