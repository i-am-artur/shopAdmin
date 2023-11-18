import { createTheme } from "@mui/material/styles";
import { palette } from "@/source/MUI/styles/pallete";
import { components } from "@/source/MUI/styles/components";
import { breakpoints } from "@/source/MUI/styles/breakpoints";
import { inter } from "@/source/styles/font";

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

const theme = createTheme({
  // palette: {
  //   mode: 'light'
  // },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  spacing: 1,
  palette,
  components,
  breakpoints,
});

export default theme;
