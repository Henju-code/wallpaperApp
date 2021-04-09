import React, { useState, useEffect, useRef } from 'react'
import auth from '@react-native-firebase/auth'
import { Animated, View, Text, Dimensions, StyleSheet } from 'react-native'

import FocusAwareStatusBar from '../../components/StatusBar/index'
import ApplyButton from '../../components/Buttons/Apply/index'
import ShareButton from '../../components/Buttons/Share/index'
import RemoveButton from '../../components/Buttons/Remove/index'

import theme from '../../themes/light-theme'
import { Container, Wallpaper, ButtonBar } from './styles'
import { getFavorites } from '../../services/Firebase/RealtimeDatabase/favoritesListFirebase'
import Login from '../Login/index'
import Loader from '../../components/Loader/index'

const { width, height } = Dimensions.get('screen')
const imageW = width * 0.7;
const imageH = imageW * 1.54;

const Loading = () => (
  <View style={styles.loadingContainer}>
    <Text style={styles.paragraph}>Loading...</Text>
  </View>
);

export default function Favorites() {

  if (auth().currentUser === null) {
    return <Login />
  }

  const [data, setData] = useState([])
  const scrollX = useRef(new Animated.Value(0)).current
  const renderItem = ({ item }) => {

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

        <Wallpaper source={{ uri: item.url }}
          width={imageW}
          height={imageH}
          Style={{ resizeMode: 'cover' }}
        />
        <ButtonBar>

          <ApplyButton image={item.urlSource} />

          <RemoveButton image={item.key} />

          <ShareButton imageUrl={item.urlSource} />

        </ButtonBar>
      </View>
    )
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getFavorites()
      setData(data)
    }

    if (data.length === 0) {
      setTimeout(() => fetchData(), 1000)
    }

  }, [data, getFavorites])

  if (data.length === 0) {
    return <Loader />
  }

  const uniqueArray = [...new Set(data)]

  console.log('###############$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%&&&&&&&&&&&&&&&&&&&')
  console.log(data)
  console.log('\n \n' + uniqueArray)

  return (
    <Container>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={theme.secondaryColor} />
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
              source={{ uri: item.url }}
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
        renderItem={renderItem}
        extraData={data}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})