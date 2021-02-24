import React from 'react';
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import theme from '../../themes/light-theme'

const FavoritesStack = createStackNavigator();

const FavoritesStackScreen = () => (
    <FavoritesStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: theme.favoritesColor
        },
        headerTintColor: theme.titleColor,
        headerTitleStyle: {
          fontWeight: theme.titleFontWeight
        }
    }}>

      <FavoritesStack.Screen  name="Favorites" 
                              component={Favorites} 
                              options={{ title: 'Favorites' }}>
      </FavoritesStack.Screen>
    </FavoritesStack.Navigator>
  );
   
export default FavoritesStackScreen; 

function Favorites(){
    return(
        <View></View>
    );
}