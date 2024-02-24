import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const ButtonStyles = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    fontWeight: "bold",
  },
  // Styles for the size variations
  sizes: {
    sm: {
      // Small button size
      fontSize: "sm",
      padding: "2",
    },
    md: {
      // Medium button size (default size)
      fontSize: "md",
      padding: "3",
    },
    lg: {
      // Large button size
      fontSize: "lg",
      padding: "4",
    },
  },
  // Styles for the visual style variations
  variants: {
    primary: (props) => ({
      width: "250px", // Set the width of the input field
      mb: 4, // Adds margin-bottom for spacing
      bg: mode("primary.light", "primary.dark")(props),
      color: mode("white", "black")(props),
      _hover: {
        bg: mode("primary.light", "primary.dark")(props),
        transform: "scale(1.05)",
        boxShadow: "md",
      },
    }),
    secondary: (props) => ({
      bg: mode("secondary.light", "secondary.dark")(props),
      color: mode("white", "black")(props),
      _hover: {
        bg: mode("secondary.light", "secondary.dark")(props),
        transform: "scale(1.05)",
        boxShadow: "md",
      },
    }),
    outline: (props) => ({
      bg: "transparent",
      boarder: "2px solid",
      boarderColor: mode("primary.light", "primary.dark")(props),
      color: mode("primary.light", "primary.dark")(props),
      _hover: {
        bg: mode("outline.light", "outline.dark")(props),
        transform: "scale(1.05)",
        boxShadow: "md",
      },
    }),
  },
  // The default values
  defaultProps: {
    size: "md", // Default button size
    variant: "primary", // Default button variant
  },
});
