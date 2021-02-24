import * as React from 'react';
import { StatusBar, Animated, View, Dimensions, StyleSheet} from 'react-native';

import getWallpaperList from '../../services/wallpaperListFirebase'
import { Container, Wallpaper } from './styles'

const { width, height } = Dimensions.get('screen');

const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default function WallpaperView ({ route }) {

    const data = getWallpaperList(route.params.key);

    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        
        <Container>
            <StatusBar hidden />
            <View style={StyleSheet.absoluteFillObject}>

                    {data.map((image, index) => {
                        const inputRange = [
                            (index - 1) * width,
                            index * width,
                            (index + 1) * width
                        ]
                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0, 1, 0]
                        })

                    return(
                        
                        <Animated.Image key={`image-${index}`}
                                        source={{uri: image}}
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

            <Animated.FlatList  data={data}
                                onScroll={Animated.event(
                                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                                    {useNativeDriver: true}
                                )}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal
                                pagingEnabled
                                renderItem={({item}) => {
                                    return(

                                        <View style={{width, 
                                                    justifyContent: 'center', 
                                                    alignItems:'center',
                                                    shadowColor: '#000',
                                                    shadowOpacity: .5,
                                                    shadowOffset: {
                                                        width: 0,
                                                        height: 0,

                                                    },
                                                    shadowRadius: 20
                                                    }}>

                                            <Wallpaper source={{uri: item}}
                                                        width={imageW}
                                                        height={imageH}
                                                // Style={{resizeMode: 'cover'}}   
                                            />

                                        </View>
                                    )
            }}
            />
        </Container>
    );
};