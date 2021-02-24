import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStackScreen from '../../pages/Home/index'
import FavoritesStackScreen from '../../pages/Favorites/index'
import NewsStackScreen from '../../pages/News/index'
import UpdateStackScreen from '../../pages/Updates/indes'

import theme from '../../themes/light-theme'

const Tab = createMaterialBottomTabNavigator();
 
 const MainTabScreen = () => {
   return(
    <Tab.Navigator
  initialRouteName="Home"
  activeColor={theme.iconOnPressColor}
>
  <Tab.Screen
    name="Home"
    component={HomeStackScreen}
    options={{
      tabBarLabel: 'Home',
      tabBarColor: theme.homeColor,
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
      ), 
    }}
  />
  <Tab.Screen
    name="Favorites"
    component={FavoritesStackScreen}
    options={{
      tabBarLabel: 'Favorites',
      tabBarColor: theme.favoritesColor,
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="heart" color={color} size={26} />
      ),
    }}
  />
  <Tab.Screen
    name="News"
    component={NewsStackScreen}
    options={{
      tabBarLabel: 'News',
      tabBarColor: theme.newsColor,
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="newspaper" color={color} size={26} />
      ),
    }}
  />
  <Tab.Screen
    name="Updates"
    component={UpdateStackScreen}
    options={{
      tabBarLabel: 'Updates',
      tabBarColor: theme.updatesColor,
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="bell" color={color} size={26} />
      ),
    }}
  />
</Tab.Navigator>
   );
 }
 export default MainTabScreen;