import React, { useRef } from 'react';
import { Animated } from 'react-native';

import getWallpaperList from '../../services/Firebase/RealtimeDatabase/wallpaperListFirebase'

import FocusAwareStatusBar from '../../components/StatusBar/index'
import PreviousButton from '../../components/Buttons/Previous/index'
import { BlurBackground } from '../../components/BlurBackground'
import { Carousel } from '../../components/Carousel'

import { Container } from './styles'

export function WallpaperView({ route }) {

    const data = getWallpaperList(route.params.key)
    const scrollX = useRef(new Animated.Value(0)).current

    return (
        <Container>
            <PreviousButton />
            <FocusAwareStatusBar barStyle="light-content" backgroundColor={'transparent'} translucent />
            <BlurBackground 
                data={data}
                scrollX={scrollX}
            />
            
            <Carousel 
                likeButtonEnable={true}
                data={data}
                scrollX={scrollX}
            />
        </Container>
    );
};