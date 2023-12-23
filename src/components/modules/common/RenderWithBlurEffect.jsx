import React, { useRef, useState, useEffect, Children } from 'react'
import { useAnimate, stagger, motion, useInView } from "framer-motion";
import { Box, List, ListItem } from '@mui/material'

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isInView) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            ".list",
            {
                clipPath: isInView
                    ? "inset(0% 0% 0% 0% round 10px)"
                    : "inset(10% 50% 90% 50% round 10px)"
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.5
            }
        );

        animate(
            ".item",
            isInView
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
            {
                duration: 0.5,
                delay: isInView ? staggerMenuItems : 0
            }
        );
    }, [isInView]);
    return scope;
}

const RenderWithEffect = ({ sx, children }) => {

    // const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null);
    const isInView = useInView(ref);

    const scope = useMenuAnimation(isInView);

    return (
        <Box className="menu" ref={scope}>
            <List
                sx={{
                    pointerEvents: isInView ? "auto" : "none",
                    // pointerEvents: "auto",
                    clipPath: "inset(10% 50% 90% 50% round 10px)"
                }}
    

                ref={ref}
                className='list'
            >
                {
                    Children.map(children, child => {
                        return (
                            <ListItem className='item' sx={{p: 0}}>
                                {child}
                            </ListItem>
                        )
                    })
                }
            </List>{" "}
        </Box>


    )
}

export default RenderWithEffect