import React from 'react';
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import theme from '../../themes/light-theme'

const NewsStack = createStackNavigator();

const NewsStackScreen = () => (
    <NewsStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: theme.newsColor
        },
        headerTintColor: theme.titleColor,
        headerTitleStyle: {
          fontWeight: theme.titleFontWeight
        }
    }}>
      <NewsStack.Screen name="News" component={News} options={{
        title: 'News',
      }}>
  
      </NewsStack.Screen>
    </NewsStack.Navigator>
  );

export default NewsStackScreen;

function News(){
    return(
      <View>
      </View>
    );
}