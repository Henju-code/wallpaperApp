//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Dimensions, StatusBar, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import getThumbnails from '../../services/thumbnailListFirebase'
import { Container, Item, Thumbnail, Invisible } from './styles'

import theme from '../../themes/light-theme'
 
const numColumns = 2;
const WIDTH = Dimensions.get('window').width;
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: theme.homeColor
      },
      headerTintColor: theme.titleColor,
      headerTitleStyle: {
        fontWeight: theme.titleFontWeight
      }
  }}>
    <HomeStack.Screen name="Home" component={Home} options={{title: 'Home'}}/>
  </HomeStack.Navigator>
);

function formatData (thumbnails, numColumns) {
  const totalRows = Math.floor(thumbnails.length / numColumns)
  let totalLastRow = thumbnails.length - (totalRows * numColumns)

  while (totalLastRow !== 0 && totalLastRow !== numColumns) {
    thumbnails.push({key: 'blank', empty: true})
    totalLastRow++
  }
  return thumbnails
}

function Home({ navigation }) {

  const thumbnails = getThumbnails();
  return (    
    <Container>
      <FlatList
      data={formatData(thumbnails, numColumns)}
      renderItem={({item, index}) => {
        if (item.empty) {
          return <Invisible height={WIDTH/numColumns} />
        }
      
        return(
          <Item height={WIDTH/numColumns}>
            <TouchableOpacity onPress={ () => navigation.navigate('WallpaperView', {key: item.key}) }>
              <Thumbnail width={(WIDTH / numColumns) - 20}
                         height={(WIDTH / numColumns) - 20} 
                         source={{uri: item.thumbnail}}/>
            </TouchableOpacity>
          </Item>
        )
      }}
      keyExtractor={(item, index) => index.toString()}
      numColumns={numColumns}
        />
    </Container>
  );
}

export default HomeStackScreen;