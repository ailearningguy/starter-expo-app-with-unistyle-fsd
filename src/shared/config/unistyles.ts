/**
 * Unistyles configuration
 * https://www.unistyl.es/
 */

import { StyleSheet } from "react-native-unistyles";
import { Colors, Fonts } from "./theme";

// Define light and dark themes based on existing Colors
const lightTheme = {
  colors: {
    ...Colors.light,
    // Additional semantic colors
    primary: Colors.light.tint,
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    border: "#e1e5e8",
    card: "#ffffff",
    placeholder: "#9BA1A6",
  },
  fonts: Fonts,
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  typography: {
    h1: { fontSize: 32, fontWeight: "700" as const },
    h2: { fontSize: 28, fontWeight: "700" as const },
    h3: { fontSize: 24, fontWeight: "600" as const },
    h4: { fontSize: 20, fontWeight: "600" as const },
    body: { fontSize: 16, fontWeight: "400" as const },
    caption: { fontSize: 14, fontWeight: "400" as const },
    small: { fontSize: 12, fontWeight: "400" as const },
  },
} as const;

const darkTheme = {
  colors: {
    ...Colors.dark,
    // Additional semantic colors
    primary: Colors.dark.tint,
    secondary: "#adb5bd",
    success: "#48bb78",
    danger: "#fc8181",
    warning: "#f6e05e",
    info: "#63b3ed",
    border: "#2d3436",
    card: "#1e2022",
    placeholder: "#687076",
  },
  fonts: Fonts,
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  typography: {
    h1: { fontSize: 32, fontWeight: "700" as const },
    h2: { fontSize: 28, fontWeight: "700" as const },
    h3: { fontSize: 24, fontWeight: "600" as const },
    h4: { fontSize: 20, fontWeight: "600" as const },
    body: { fontSize: 16, fontWeight: "400" as const },
    caption: { fontSize: 14, fontWeight: "400" as const },
    small: { fontSize: 12, fontWeight: "400" as const },
  },
} as const;

// Define breakpoints for responsive design
const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;

// Theme type for TypeScript
type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

type AppBreakpoints = typeof breakpoints;

// Extend Unistyles types
declare module "react-native-unistyles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesThemes extends AppThemes {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

// Configure Unistyles
StyleSheet.configure({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  breakpoints,
  settings: {
    adaptiveThemes: true, // Automatically switch theme based on device settings
  },
});

// Export themes for potential direct use
export { breakpoints, darkTheme, lightTheme };
