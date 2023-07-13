export const tokens = {
  //With tailwind you can generate variatons of 
  // The color wiyh ctrl k+ ctrl g
  grey: {
    100: "#f0f0f3",
    200: "#e1e2e7",
    300: "#d1d3da",
    400: "#c2c5ce",
    500: "#b3b6c2",
    600: "#8f929b",
    700: "#6b6d74",
    800: "#48494e",
    900: "#242427",
  },
  primary: {
    // orange
    100: "#d93d04",
    200: "#f27405",
    300: "#f29f05",
    400: "#98d936",
    500: "#FF0A0A"
  },
  secondary: {
    // green
    100: "#4fdc04",
    200: "#98d936",
    300: "#4abf2a",
    400: "#d7f205",
    500: "#84d98a",
  },
  tertiary: {
    // blue
    100: "#3498db",
    200: "#aed6f1",
    300: "#85c1e9",
    400: "#5dade2",
    500: "#3498db",
    600: "#2a7aaf",
    700: "#1f5b83",
    800: "#153d58",
    900: "#0a1e2c",
  },
  background: {
    light: "#1e1f21",
    main: "#16171b",
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[300],
      light: tokens.primary[200],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};