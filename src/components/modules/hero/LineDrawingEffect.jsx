import React, { useRef } from 'react'
import "./styles/LineDrawingEffect.css";
import { useInView, motion } from "framer-motion";
import { Box, useTheme } from '@mui/material';

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};

export default function LineDrawingEffect({isInView}) {
    // const ref = useRef(null);
    // const isInView = useInView(ref);
    const theme = useTheme();

    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <motion.svg
                //   width="600"
                //   height="600"
                // style={{
                //     width: '100%',
                //     height: '100%'
                // }}
                viewBox="0 0 600 600"
                initial="hidden"
                animate={isInView ? "visible" : "initial"}
            >
                <motion.line
                    x1="0"
                    y1="20"
                    x2="100%"
                    y2="20"
                    stroke={theme.palette.primary.main}
                    variants={draw}
                    custom={2}
                />
                <motion.line
                    x1="20"
                    y1="0"
                    x2="20"
                    y2="100%"
                    stroke={theme.palette.primary.main}
                    variants={draw}
                    custom={2.5}
                />
            </motion.svg>
        </Box>
    );
}
