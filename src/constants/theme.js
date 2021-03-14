import { createMuiTheme } from "@material-ui/core/styles";
import { secundaryColor } from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: secundaryColor,
      contrastText: "#fff",
    },
  },
  secondary: {
    main: "#399d39",
  },
  text: {
    primary: "#000",
  },
});

export default theme;
