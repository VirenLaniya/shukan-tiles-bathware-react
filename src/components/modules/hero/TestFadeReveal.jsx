import React from 'react'
import { Container } from '@mui/material'
import FadeRevealAnimation from '../common/FadeRevealAnimation'

import {introduction} from '../../../data/hero'

const TestFadeReveal = () => {
    return (
        <Container>
            <FadeRevealAnimation>
                <div style={{ width: '30%' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sed molestiae? Rerum sed velit alias, repellat fugit consequuntur, est, non expedita similique error magnam sapiente eveniet sequi id cupiditate reprehenderit.
                </div>
                <img src={introduction.introImage} alt='Ram Ram' />
            </FadeRevealAnimation>
        </Container>
    )
}

export default TestFadeReveal