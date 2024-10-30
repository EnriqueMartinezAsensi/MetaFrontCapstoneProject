import { createTheme } from "@mui/material";
import theme from "../../../theme/theme";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary.main,
      contrastText: theme.colors.common.white,
    },
    secondary: {
      main: theme.colors.primary.main,
      contrastText: theme.colors.common.white,
    },
  },
});

export default muiTheme;
