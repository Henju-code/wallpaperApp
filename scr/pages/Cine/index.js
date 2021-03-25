 import * as React from 'react';
//  import {
//    StatusBar,
//    Text,
//    View,
//    StyleSheet,
//    FlatList,
//    Image,
//    Dimensions,
//    Animated,
//  } from 'react-native';
//  const { width, height } = Dimensions.get('window');
//  import { getMovies } from '../../services/TMDB/api';
//  import Genres from '../../services/TMDB/Genres';
//  import Rating from '../../services/TMDB/Rating';
//  import { LinearGradient } from 'expo-linear-gradient';
 
//  const SPACING = 10;
//  const ITEM_SIZE = width * 0.72;
//  const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
//  const BACKDROP_HEIGHT = height * 0.65;
 
//  const Loading = () => (
//    <View style={styles.loadingContainer}>
//      <Text style={styles.paragraph}>Loading...</Text>
//    </View>
//  );
import  Loader from '../../components/Loader/index'
 
//  const Backdrop = ({ movies, scrollX }) => {
//    return (
//      <View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute'}}>
//        <FlatList
//          data={movies.reverse()}
//          keyExtractor={(item) => item.key + '-backdrop'}
//          removeClippedSubviews={false}
//          contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
//          renderItem={({ item, index }) => {
//            if (!item.backdrop) {
//              return null;
//            }
//            const translateX = scrollX.interpolate({
//              inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
//              outputRange: [0, width],
//              // extrapolate:'clamp'
//            });
//            return (
//              <Animated.View
//                removeClippedSubviews={false}
//                style={{
//                  position: 'absolute',
//                  width: translateX,
//                  height,
//                  overflow: 'hidden',
//                }}
//              >
//                <Image
//                  source={{ uri: item.backdrop }}
//                  style={{
//                    width,
//                    height: BACKDROP_HEIGHT,
//                    position: 'absolute',
//                  }}
//                />
//              </Animated.View>
//            );
//          }}
//        />
//        <LinearGradient
//          colors={['rgba(0, 0, 0, 0)', 'white']}
//          style={{
//            height: BACKDROP_HEIGHT,
//            width,
//            position: 'absolute',
//            bottom: 0,
//          }}
//        />
//      </View>
//    );
//  };
 
 export default function Cine() {
  //  const [movies, setMovies] = React.useState([]);
  //  const scrollX = React.useRef(new Animated.Value(0)).current;
  //  React.useEffect(() => {
  //    const fetchData = async () => {
  //      const movies = await getMovies();
  //      // Add empty items to create fake space
  //      // [empty_item, ...movies, empty_item]
  //      setMovies([{ key: 'empty-left' }, ...movies, { key: 'empty-right' }]);
  //    };
 
  //    if (movies.length === 0) {
  //      fetchData(movies);
  //    }
  //  }, [movies]);
 
  //  if (movies.length === 0) {
  //    return <Loading />;
  //  }
 
   return <Loader /> 
   //(
    //  <View style={styles.container}>
    //    <StatusBar translucent backgroundColor="transparent" />
    //    <Backdrop movies={movies} scrollX={scrollX} />
    //    <Animated.FlatList
    //      showsHorizontalScrollIndicator={false}
    //      data={movies}
    //      keyExtractor={(item) => item.key}
    //      horizontal
    //      bounces={false}
    //      decelerationRate={0}
    //      renderToHardwareTextureAndroid
    //      contentContainerStyle={{ alignItems: 'center' }}
    //      snapToInterval={ITEM_SIZE}
    //      snapToAlignment='start'
    //      onScroll={Animated.event(
    //        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    //        { useNativeDriver: false }
    //      )}
    //      scrollEventThrottle={16}
    //      renderItem={({ item, index }) => {
    //        if (!item.poster) {
    //          return <View style={{ width: EMPTY_ITEM_SIZE }} />;
    //        }
 
    //        const inputRange = [
    //          (index - 2) * ITEM_SIZE,
    //          (index - 1) * ITEM_SIZE,
    //          index * ITEM_SIZE,
    //        ];
 
    //        const translateY = scrollX.interpolate({
    //          inputRange,
    //          outputRange: [100, 50, 100],
    //          extrapolate: 'clamp',
    //        });
 
    //        return (
    //          <View style={{ width: ITEM_SIZE }}>
    //            <Animated.View
    //              style={{
    //                marginHorizontal: SPACING,
    //                padding: SPACING * 2,
    //                alignItems: 'center',
    //                transform: [{ translateY }],
    //                backgroundColor: 'white',
    //                borderRadius: 34,
    //              }}
    //            >
    //              <Image
    //                source={{ uri: item.poster }}
    //                style={styles.posterImage}
    //              />
    //              <Text style={{ fontSize: 24 }} numberOfLines={1}>
    //                {item.title}
    //              </Text>
    //              <Rating rating={item.rating} />
    //              <Genres genres={item.genres} />
    //              <Text style={{ fontSize: 12 }} numberOfLines={3}>
    //                {item.description}
    //              </Text>
    //            </Animated.View>
    //          </View>
    //        );
    //      }}
    //    />
    //  </View>
  //  );
 }
 
//  const styles = StyleSheet.create({
//    loadingContainer: {
//      flex: 1,
//      alignItems: 'center',
//      justifyContent: 'center',
//    },
//    container: {
//      flex: 1,
//      //backgroundColor: 'white'
//    },
//    paragraph: {
//      margin: 24,
//      fontSize: 18,
//      fontWeight: 'bold',
//      textAlign: 'center',
//    },
//    posterImage: {
//      width: '100%',
//      height: ITEM_SIZE * 1.2,
//      resizeMode: 'cover',
//      borderRadius: 24,
//      margin: 0,
//      marginBottom: 10,
//    },
//  });
 
// import React from 'react';
// import { View } from 'react-native'
// import { createStackNavigator } from '@react-navigation/stack'

// import theme from '../../themes/light-theme'

// const CineStack = createStackNavigator();

// const CineStackScreen = () => (
//     <CineStack.Navigator screenOptions={{
//         headerStyle:{
//           backgroundColor: theme.newsColor
//         },
//         headerTintColor: theme.titleColor,
//         headerTitleStyle: {
//           fontWeight: theme.titleFontWeight
//         }
//     }}>
//       <CineStack.Screen name="Cine" component={Cine} options={{
//         title: 'Cinema',
//       }}>
  
//       </CineStack.Screen>
//     </CineStack.Navigator>
//   );

// export default CineStackScreen;

// function Cine(){
//     return(
//       <View>
//       </View>
//     );
// }

/**
 * Inspiration: https://dribbble.com/shots/8257559-Movie-2-0
 *
 */