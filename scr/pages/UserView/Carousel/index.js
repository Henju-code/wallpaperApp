import React, { useRef } from 'react'
import { Animated, Dimensions } from 'react-native'

import { Card } from './Card/index'
import { DotsIndicator } from './DotsIndicator/index'

import { Container } from './styles'

export function Carousel() {

    const { width } = Dimensions.get('screen')

    const scrollX = useRef(new Animated.Value(0)).current

    const cards = [
        { name: 'Avengers', score: 30 },
        { name: 'Game of Thrones - Premium 2', score: 10 },
        { name: 'Alladin', score: 3 }
    ]

    return (
        <Container>
            <Animated.FlatList
                data={cards}
                keyExtractor={(_, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                snapToInterval={width * 0.625}
                decelerationRate='normal'
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                renderItem={({ item }) => {
                    return <Card movie={item} />
                }}
            />

            <DotsIndicator
                data={cards}
                width={width}
                scrollX={scrollX}
            />
        </Container>
    )
}