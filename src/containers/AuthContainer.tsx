import { FC, ReactNode } from 'react'
import { Box } from '@mui/material'
import { StyledTabContainer } from '../styles/components'

interface Props {
    children: ReactNode
}
export const AuthContainer: FC<Props> = ({ children }) => {
    return (
        <Box
            sx={{
                height: "100vh",
                position: "relative",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <StyledTabContainer>
                {children}
            </StyledTabContainer>
        </Box>
    )
}
