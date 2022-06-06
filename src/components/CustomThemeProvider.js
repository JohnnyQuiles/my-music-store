import { createTheme, ThemeProvider } from "@mui/material";

const BLACK = "#1C1B1F";
const PURPLE = "#6750A4";

const THEME = createTheme({
    palette: {
        primary: {
            main: BLACK,
        },
        secondary: {
            main: PURPLE,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "25px",
                },
            },
        },
    },
});

const CustomThemeProvider = (props) => {
    const { children } = props;

    return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;