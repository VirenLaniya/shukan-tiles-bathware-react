import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";

const ResponsiveButton = (maxSize) => {
    const theme = useTheme();

    const desktop = useMediaQuery(theme.breakpoints.up("lg"));
    const tablet = useMediaQuery(theme.breakpoints.up("sm"));
    const mobile = useMediaQuery(theme.breakpoints.up("xs"));

    const getSize = () => {
        if (desktop && maxSize == 'large') return "large";
        if (tablet && (maxSize == 'medium' || maxSize == 'large')) return "medium";
        if (mobile && (maxSize == 'small' || maxSize == 'medium' || maxSize == 'large')) return "small";
    };

    return getSize()
};

export default ResponsiveButton;