const themeColor = "#5ece7b";

const theme = {
  fontStyles: {
    Raleway: "Raleway, sans-serif",
    Roboto: "Roboto Condensed, sans-serif",
    Source: "Source Sans Pro, sans-serif",
  },
  durations: {
    fs: "100ms",
    md: "300ms",
    sl: "500ms",
  },
  fontSizes: {
    xs: "16px",
    sm: "18px",
    m: "24px",
    l: "30px",
    xl: "42px",
  },
};

export const lightTheme = {
  ...theme,
  mode: "light",
  themeColor,
  backgrounds: {
    primary: "#f0f0f0",
    secondary: "#d0d0d0",
    greyPrimary: "#888888",
    greySecondary: "#e0e0e0",
    white: "#ffffff",
  },
  colors: {
    primary: "#000000",
    secondary: "#333333",
    greyPrimary: "#888888",
    greySecondary: "#666666",
    success: "#22BB33",
    danger: "#f44336",
    hover: themeColor,
    selected: themeColor,
    white: "#ffffff",
  },
  borders: {
    colors: {
      darkGrey: "#cccccc",
      lightGrey: "#999999",
      selected: themeColor,
      white: "#ffffff",
    },
    sizes: { bs: "1px", lg: "2px" },
    radius: { bs: "1px", lg: "5px", xl: "8px" },
  },
  shadows: {
    drop: "#00000044",
  },
};

export default lightTheme;
