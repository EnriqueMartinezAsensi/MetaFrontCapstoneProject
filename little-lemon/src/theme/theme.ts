const theme = {
  colors: {
    common: {
      black: `black`,
      grey: `lightgrey`,
      white: `white`,
    },
    primary: {
      main: `#495E57`,
      text: `white`,
    },
    secondary: {
      main: `rgba(255, 255, 255, 0.87)`,
      text: `#242424`,
    },
    button: {
      normal:{
        background: `#F4CE14`,
        text: `black`,
      },
      click:{
        background: `#495E57`,
        text: `#F5F5F5`,
      },
      disabled: {
        background: `#EE9972`,
        text: `black`,
      }
    }
  },
  text: {
    title: {
      fontFamily: "MarkaziText",
      fontSize: "60pt",
    },
    subtitle: {
      fontFamily: "MarkaziText",
      fontSize: "40pt",
    },
    normal: {
      fontFamily: "Karla",
      fontSize: "18pt",
    },
    card: {
      fontFamily: "Karla",
      fontSize: "16pt",
      lineHeight: "1.5",
    },
    navigationBar: {
      fontFamily: "Karla",
      fontSize: "14pt",
      fontWeight: 600,
    },
  },
  radiuses: {
    medium: `16`,
  },
  transitions: {
    normal: `0.3`,
  },
};

export default theme;