import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import ManageWallpaper, { TYPE } from 'react-native-manage-wallpaper'

import theme from '../../themes/light-theme'
import FocusAwareStatusBar from '../../components/StatusBar/index' 

export default function Favorites(){


  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }}
    >
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={theme.secondaryColor} />
      
      <TouchableOpacity
        style={{
          paddingHorizontal: 30,
          paddingVertical: 8,
          marginBottom: 24,
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000000',
        }}
        //onPress={this._setWallpaper}
      >
        <Text
          style={{
            fontSize: 20,
            margin: 10,
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          Change Home Wallpaper
        </Text>
      </TouchableOpacity>
    </View>
  );
}