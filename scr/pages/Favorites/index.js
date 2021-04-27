import React, { useRef } from 'react'
import auth from '@react-native-firebase/auth'
import { Animated } from 'react-native'

import { useFavorites } from '../../hooks/useFavorites'

import FocusAwareStatusBar from '../../components/StatusBar/index'
import Loader from '../../components/Loader/index'
import { BlurBackground } from '../../components/BlurBackground'
import { Carousel } from '../../components/Carousel'

import { Container } from './styles'
import Login from '../Login/index'

export function Favorites() {

  if (auth().currentUser === null) {
    return <Login />
  }

  const { favorites } = useFavorites()
  const scrollX = useRef(new Animated.Value(0)).current

  if (favorites.length === 0) {
    return <Loader />
  }

  return (
    <Container>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={'transparent'} translucent />
      <BlurBackground 
        data={favorites}
        scrollX={scrollX}
      />

      <Carousel
        likeButtonEnable={false}
        data={favorites}
        scrollX={scrollX}
      />
    </Container>
  );
}