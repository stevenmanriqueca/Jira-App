import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        background: {
            default: "#DDDDDD"
        },
        primary: {
            main: "#1A237E",
            light: "#F5F5F5",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 744,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    // Styles for defult scrollbar Page
                    "::-webkit-scrollbar": {
                        width: "6px",
                    },
                    "::-webkit-scrollbar-thumb": {
                        backgroundColor: "#5e6188",
                        borderRadius: "10px",
                    },
                    // Styles for All Scrollbars
                    "*::-webkit-scrollbar": {
                        width: "6px",
                    },
                    "*::-webkit-scrollbar-thumb": {
                        backgroundColor: "#5e6188",
                        borderRadius: "10px",
                    },
                },
            },
        },
    },
})