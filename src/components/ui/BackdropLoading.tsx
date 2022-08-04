import { FC } from "react";
import { Backdrop, CircularProgress } from "@mui/material"

interface Props {
    isValidating: boolean;
}

export const BackdropLoading: FC<Props> = ({ isValidating }) => {
    return (
        <Backdrop
            sx={{ backgroundColor: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isValidating}
        >
            <CircularProgress color="primary" />
        </Backdrop>
    )
}
