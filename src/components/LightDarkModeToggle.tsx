import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

export const LightDarkModeToggle = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton
        variant="outline"
        icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
        size="md"
        mt={2}
        ml={2}
        aria-label="Color mode switcher"
        onClick={toggleColorMode}
      >
        Toggle Mode
      </IconButton>
    </>
  );
};
