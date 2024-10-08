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
  radiuses: {
    medium: `16`,
  },
  transitions: {
    normal: `0.3`,
  },
};

export default theme;