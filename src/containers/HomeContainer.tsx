import { FC, ReactNode } from "react"
import { Paper } from "@mui/material"

interface Props {
    children: ReactNode
}

export const HomeContainer: FC<Props> = ({ children }) => {
    return (
        <Paper elevation={4} sx={{
            m: 1.8,
            backgroundColor: "primary.light",
            height: "100%",
        }}>
            {children}
        </Paper>
    )
}
