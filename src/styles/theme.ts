const baseTheme = {
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Montserrat', sans-serif",
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
    secondary: "#2ecc71",
    background: "#496ccf",
    text: "#333333",
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
