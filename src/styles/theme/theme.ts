import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        background: {
            default: "#DDDDDD"
        },
        primary: {
            dark: "#DDDDDD",
            main: "#1A237E",
            light: "#F5F5F5",

        },
        error: {
            main: "#ce0e0e",
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
                    "*::-webkit-scrollbar": {
                        width: "6px",
                    },
                    "*::-webkit-scrollbar-thumb": {
                        backgroundColor: "#1A237E",
                        borderRadius: "10px",
                    },
                },
            },
        },
    },
})