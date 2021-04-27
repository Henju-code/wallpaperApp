import React from 'react'
import {
    Animated,
    View,
    Dimensions,
    StyleSheet
} from 'react-native'

const { width } = Dimensions.get('screen')

export function BlurBackground({ data, scrollX }) {
    return (
        <View style={StyleSheet.absoluteFillObject}>
            {data.map((item, index) => {

                const inputRange = [
                    (index - 1) * width,
                    index * width,
                    (index + 1) * width
                ]
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 1, 0]
                })

                return (

                    <Animated.Image key={`image-${index}`}
                        source={{ uri: item._thumbnail }}
                        style={[
                            StyleSheet.absoluteFillObject,
                            {
                                opacity
                            }
                        ]}
                        blurRadius={50}
                    />
                )
            })}
        </View>
    )
}
