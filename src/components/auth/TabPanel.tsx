import { ReactNode } from "react";
import { Box } from "@mui/material";

interface Props {
    children: ReactNode;
    value: number;
    index: number;
}
export const TabPanel = ({ children, value, index }: Props) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-auth-${index}`}
            aria-labelledby={`auth-tab-${index}`}
        >
            {value === index && (
                <Box
                    sx={{
                        p: 3,
                    }}
                >
                    {children}
                </Box>
            )}
        </div>
    );
};
