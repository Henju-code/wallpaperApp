import React from 'react'
import { Dimensions, ImageBackground, TouchableOpacity } from 'react-native'

import { Content, Title, Button, Description, Score, styles } from './styles'

const { width } = Dimensions.get('screen')

export function Card({ movie }) {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <ImageBackground
                style={styles.cardBackground}
                source={require('../../../../assets/movieWallpaper.jpg')}
            >
                <Content width={width * 0.75} height={width * 0.60} >

                    <Title>{movie.name}</Title>
                    <Button>
                        <Score>{movie.score}</Score>
                    </Button>
                    <Description>Wallpapers salvos</Description>
                </Content>
            </ImageBackground>
        </TouchableOpacity>
    )
}