import React, { useRef, useState } from 'react'
import { Animated } from 'react-native'

import { Pagination, Dot, Styles } from './styles'

export function DotsIndicator({data, width, scrollX}) {

    const DOT_SIZE = 8
    const DOT_SPACING = 8
    const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING

    const firstMove = DOT_INDICATOR_SIZE
    const nextMove = DOT_INDICATOR_SIZE * 2

    const opacity = useRef(new Animated.Value(0)).current
    const [position, setPosition] = useState(scrollX)

    // function handleShowDots () {
        
    // }

    return (
        <Pagination>
            {data.map((_, index) => {                   
                return <Dot key={index} />
            })}

            <Animated.View style={[Styles.dotIndicator, {
                transform: [{
                    translateX: Animated.divide(position, width).interpolate({
                        inputRange: [0, 1, 2],
                        outputRange: [0, firstMove, nextMove]
                    })
                }]
            }]} />
        </Pagination>
    )
}