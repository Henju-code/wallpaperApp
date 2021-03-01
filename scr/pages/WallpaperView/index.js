import * as React from 'react';
import { StatusBar, Animated, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import ApplyButton from '../../components/Buttons/Apply/index'
import FavoriteButton from '../../components/Buttons/Favorite/index'
import ShareButton from '../../components/Buttons/Share/index'
import getWallpaperList from '../../services/wallpaperListFirebase'
import { Container, Wallpaper, ButtonBar } from './styles'

const { width, height } = Dimensions.get('screen');

const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default function WallpaperView({ route }) {

    const data = getWallpaperList(route.params.key);
    let inFocus = ''

    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (

        <Container>
            <StatusBar hidden />
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

            <Animated.FlatList data={data}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                pagingEnabled
                renderItem={({ item }) => {

                    return (                        
                        <View style={{
                            width,
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOpacity: .5,
                            shadowOffset: {
                                width: 0,
                                height: 0,

                            },
                            shadowRadius: 20,
                            paddingTop: 30
                        }}>

                            <Wallpaper source={{ uri: item._thumbnail }}
                                width={imageW}
                                height={imageH}
                                Style={{ resizeMode: 'cover' }}
                            />
                            <ButtonBar>

                                <FavoriteButton />

                                <ShareButton />

                                <ApplyButton image={item.url} />

                            </ButtonBar>
                        </View>
                    )
                }}
            />

        </Container>
    );
};