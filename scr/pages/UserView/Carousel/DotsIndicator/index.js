import React from 'react'
import { Animated } from 'react-native'

import { Pagination, Dot, Styles } from './styles'

export function DotsIndicator({data, width, scrollX}) {

    const DOT_SIZE = 8
    const DOT_SPACING = 8
    const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING

    return (
        <Pagination>
            {data.map((_, index) => {
                return <Dot key={index} />
            })}

            <Animated.View style={[Styles.dotIndicator, {
                transform: [{
                    translateX: Animated.divide(scrollX, width).interpolate({
                        inputRange: [0, 1, 2],
                        outputRange: [0, (DOT_INDICATOR_SIZE + DOT_SIZE / 0.85), DOT_INDICATOR_SIZE * 3.2]
                    })
                }]
            }]} />
        </Pagination>
    )
}