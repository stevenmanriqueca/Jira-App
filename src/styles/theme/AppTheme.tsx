import { FC, ReactNode } from "react"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from './';

interface Props {
    children: ReactNode
}

export const AppTheme: FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}