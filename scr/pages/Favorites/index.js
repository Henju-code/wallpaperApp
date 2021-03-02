import * as React from 'react';
//import { Animated, View, Dimensions, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth'


import { getFavorites } from '../../services/favoritesListFirebase'
// import FocusAwareStatusBar from '../../components/StatusBar/index'
// import ApplyButton from '../../components/Buttons/Apply/index'
// import ShareButton from '../../components/Buttons/Share/index'
import Login from '../Login/index'
import { Carousel } from '../../components/Carousel/index'

// import theme from '../../themes/light-theme'
// import { Container, Wallpaper, ButtonBar } from './styles'

// const { width, height } = Dimensions.get('screen');

// const imageW = width * 0.7;
// const imageH = imageW * 1.54;


function Favorites() {
  
  const uid = auth().currentUser

  if (uid === null) {
    return <Login />
  }


  
  
  // const scrollX = React.useRef(new Animated.Value(0)).current
  console.log('zeck')

  return (
    <Carousel data={getFavorites()} />
    // <Container>
    //   <FocusAwareStatusBar barStyle="light-content" backgroundColor={theme.secondaryColor} />
    //   <View style={StyleSheet.absoluteFillObject}>

    //     {data.map((item, index) => {

    //       const inputRange = [
    //         (index - 1) * width,
    //         index * width,
    //         (index + 1) * width
    //       ]
    //       const opacity = scrollX.interpolate({
    //         inputRange,
    //         outputRange: [0, 1, 0]
    //       })

    //       return (

    //         <Animated.Image key={`image-${index}`}
    //           source={{ uri: item.url }}
    //           style={[
    //             StyleSheet.absoluteFillObject,
    //             {
    //               opacity
    //             }
    //           ]}
    //           blurRadius={50}
    //         />

    //       )
    //     })}
    //   </View>

    //   <Animated.FlatList data={data}
    //     onScroll={Animated.event(
    //       [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    //       { useNativeDriver: true }
    //     )}
    //     keyExtractor={(item, index) => index.toString()}
    //     horizontal
    //     pagingEnabled
    //     renderItem={({ item }) => {

    //       return (
    //         <View style={{
    //           width,
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           shadowColor: '#000',
    //           shadowOpacity: .5,
    //           shadowOffset: {
    //             width: 0,
    //             height: 0,

    //           },
    //           shadowRadius: 20,
    //           paddingTop: 30
    //         }}>

    //           <Wallpaper source={{ uri: item.url }}
    //             width={imageW}
    //             height={imageH}
    //             Style={{ resizeMode: 'cover' }}
    //           />
    //           <ButtonBar>

    //             <ApplyButton image={item.urlSource} />

    //             <ShareButton />

    //           </ButtonBar>
    //         </View>
    //       )
    //     }}
    //   />

    // </Container>
  );
};

export default Favorites