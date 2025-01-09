module.exports = {
  content: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      yellow: "0px 20px 20px -15px rgb(242, 135, 28) ",
      "yellow-md": "0px 20px 40px -15px rgba(242, 135, 28,0.81) ",
      
    },
    colors: {
      transparent: "transparent",
      black: {
        500: "#4F5665",
        600: "#0B132A",
        900: "#000000",
      },
      red: {
        500: "#d32f2f",
      },
      yellow: {
        100: "#FFECEC",
        200: "#FDEEDF",
        300: "#ffbb76",
        500: "#f2871c",
        800: "#FDB813",
      },
      green: {
        500: "#2FAB73",
        600: "#46c356",
      },
      white: {
        300: "#F8F8F8",
        500: "#fff",
      },
      gray: {
        100: "#EEEFF2",
        400: "#AFB5C0",
        500: "#DDDDDD",
      },
      blue: {
        500: "#055fff",
      },
    },
    extend: {
      backgroundImage: {
        'heroBanner': "url('https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/443ff7a8-c719-4beb-c98a-edb8d186a700/1')",
      }
      
    },
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [],
};
