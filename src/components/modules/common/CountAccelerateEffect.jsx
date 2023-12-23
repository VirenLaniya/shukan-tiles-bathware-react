import React, { useEffect, useRef } from 'react'
import { useMotionValue, useTransform, motion, useInView, animate } from 'framer-motion'
import { Box, Typography } from '@mui/material'

const CountAccelerateEffect = ({ value, sx, ...others }) => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, latest => Math.round(latest))
    const ref = useRef(null)
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration: others.duration ?? 3 })
            return controls.stop
        }
    }, [isInView])

    return (
        <Typography {...others} sx={{...sx}}>
            <motion.div ref={ref}>
                {/* <Typography {...others} sx={{ ...sx }}> */}
                {rounded}
                {/* </Typography> */}
            </motion.div>
        </Typography>


    );
}

export default CountAccelerateEffect