import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import theme from '../../themes/light-theme'

import  {HomeStackScreen, FavoritesStackScreen, ProfileStackScreen} from '../../navigation/StackScreen/index' 

const Tab = createMaterialBottomTabNavigator();
 
 const MainTabScreen = () => {
   return(
    <Tab.Navigator
  initialRouteName="Home"
  activeColor={theme.iconOnPressColor}
  shifting={true}
>
  <Tab.Screen
    name="Home"
    component={HomeStackScreen}
    options={{
      tabBarLabel: 'Inicio',
      tabBarColor: theme.primaryColor,
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
      ), 
    }}
  />

  <Tab.Screen
    name="Favorites"
    component={FavoritesStackScreen}
    options={{
      tabBarLabel: 'Favoritos',
      tabBarColor: theme.secondaryColor,
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="heart" color={color} size={26} />
      ),
    }}
  />
  
  <Tab.Screen
    name="Profile"
    component={ProfileStackScreen}
    options={{
      tabBarLabel: 'Perfil',
      tabBarColor: theme.quaternaryColor,
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="account" color={color} size={26} />
      ),
    }}
  />
</Tab.Navigator>
   );
 }
 export default MainTabScreen;