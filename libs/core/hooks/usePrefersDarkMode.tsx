import { useMediaQuery } from "@mui/material";

export const usePrefersDarkMode = () => {
    return useMediaQuery('(prefers-color-scheme: dark)');
    
}