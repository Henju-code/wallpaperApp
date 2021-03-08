//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Dimensions, TouchableOpacity } from 'react-native';

import getThumbnails from '../../services/thumbnailListFirebase'
import { Container, Item, Thumbnail, Invisible } from './styles'

import theme from '../../themes/light-theme'
import FocusAwareStatusBar from '../../components/StatusBar/index'

const numColumns = 2;
const WIDTH = Dimensions.get('window').width;

function formatData(thumbnails, numColumns) {

  const totalRows = Math.floor(thumbnails.length / numColumns)
  let totalLastRow = thumbnails.length - (totalRows * numColumns)

  while (totalLastRow !== 0 && totalLastRow !== numColumns) {
    thumbnails.push({ key: 'blank', empty: true })
    totalLastRow++
  }
  return thumbnails
}

export default function Home({ navigation }) {

  const thumbnails = getThumbnails();
  return (
    <Container>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={theme.primaryColor} />
      <FlatList
        data={formatData(thumbnails, numColumns)}
        renderItem={({ item, index }) => {
          if (item.empty) {
            return <Invisible height={WIDTH / numColumns} />
          }

          return (
            <Item height={WIDTH / numColumns}>
              <TouchableOpacity onPress={() => navigation.navigate('WallpaperView', { key: item.key })}>
                <Thumbnail width={(WIDTH / numColumns) - 20}
                  height={(WIDTH / numColumns) - 20}
                  source={{ uri: item.thumbnail }} />
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