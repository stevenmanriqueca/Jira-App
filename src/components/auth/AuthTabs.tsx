import { useState, SyntheticEvent } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { LoginTabContent, RegisterTabContent, TabPanel } from "./";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

export const AuthTabs = () => {

    const [value, setValue] = useState<number>(0);

    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Auth tabs"
                    centered
                >
                    <Tab
                        label="Login"
                        icon={<VpnKeyOutlinedIcon />}
                        iconPosition="start"
                    />
                    <Tab
                        label="Register"
                        icon={<HowToRegOutlinedIcon />}
                        iconPosition="start"
                    />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <LoginTabContent />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <RegisterTabContent />
            </TabPanel>
        </>
    );
};
