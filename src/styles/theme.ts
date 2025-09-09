const baseTheme = {
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
  size: {
    small: ''
  },

  spacing: {
    small: "8px",
    medium: "16px",
    large: "32px",
  },
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    primary: "#3498db",
    secondary: "#0b488dff",
    third: "#2ecc71",
    background1: "#e1e5ecff",
    background2: "#ffffffff",
    background3: "#141414ff",
    text1: "#333333",
    text2: "#ffffffff",

  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    primary: "#92b1c5",
    secondary: "#696969",
    background: "#1f1f1f",
    text: "#ffffff",
  },
};
