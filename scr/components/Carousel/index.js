import React from 'react'
import { Animated, View, Dimensions} from 'react-native'

import { ApplyButton } from '../Buttons/Apply'
import { ShareButton } from '../Buttons/Share'
import { FavoriteButton } from '../Buttons/Favorite'
import { RemoveButton } from '../Buttons/Remove'

import { Wallpaper, ButtonBar } from './styles'

const { width } = Dimensions.get('screen')
const imageW = width * 0.7
const imageH = imageW * 1.54

export function Carousel({ likeButtonEnable, data, scrollX }) {
    return (
        <Animated.FlatList data={data}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
            )}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
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
                            height: 0
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
                            <ApplyButton image={item.url} />

                            {
                                likeButtonEnable 
                                ? <FavoriteButton imageRef={item.key} image={item} />
                                : <RemoveButton image={item.key} />
                            }

                            <ShareButton imageUrl={item.url} />
                        </ButtonBar>
                    </View>
                )
            }}
        />
    )
}