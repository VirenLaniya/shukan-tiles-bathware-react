import React, { useRef } from 'react'

//#region Framer Motion Imports
import { useInView, motion } from 'framer-motion'
//#endregion

//#region Data Imports
import { fadeRevealTime } from '../../../data/common'
//#endregion

const FadeRevealAnimation = ({ children, revealTime }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8, transformOrigin: 'center center' }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            // transition={{ duration: 0.8, delay: revealTime }} 
            transition={{
                opacity: { duration: 0.6, delay: revealTime ?? fadeRevealTime },
                scale: { duration: 0.3, delay: revealTime ?? fadeRevealTime }
            }} >
            {children}
        </motion.div >
    )
}

export default FadeRevealAnimation