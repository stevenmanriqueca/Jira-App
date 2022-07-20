import { ChangeEvent, useState } from "react";
import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material"
import { StyledFormContainer, StyledFormLabel } from '../../styles/components/Options';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

export const OptionsHome = () => {
    const [valueRadio, setValueRadio] = useState<string>("High")


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValueRadio((event.target as HTMLInputElement).value);
    }

    const handleClick = (event: any) => {
        if ((event.target as HTMLInputElement).value === valueRadio) {
            setValueRadio("")
        }
    }

    return (
        <Stack direction="row" alignItems="flex-start" spacing={3} sx={{ p: 3 }}>
            <Button variant="outlined" startIcon={<AddOutlinedIcon />}>New Entry</Button>
            <Button variant="outlined" startIcon={<DashboardCustomizeIcon />}>Add Column</Button>
            <FormControl >
                <StyledFormContainer>
                    <StyledFormLabel>Priority :</StyledFormLabel>
                    <RadioGroup row value={valueRadio} onChange={handleChange}>
                        <FormControlLabel value="High" control={<Radio onClick={handleClick} />} label="High" />
                        <FormControlLabel value="Medium" control={<Radio onClick={handleClick} />} label="Medium" />
                        <FormControlLabel value="Low" control={<Radio onClick={handleClick} />} label="Low" />
                    </RadioGroup>
                </StyledFormContainer>
            </FormControl>
        </Stack>
    )
}