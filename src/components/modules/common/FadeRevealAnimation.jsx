import React, { useRef } from 'react'

//#region Framer Motion Imports
import { useInView, motion } from 'framer-motion'
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
                opacity: { duration: 0.8, delay: revealTime },
                scale: { duration: 0.4, delay: revealTime }
            }} >
                { children }
        </motion.div >
    )
}

export default FadeRevealAnimation