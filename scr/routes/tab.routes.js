import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Home } from '../pages/Home'
import { Favorites } from '../pages/Favorites'
import { UserView } from '../pages/UserView'

import theme from '../themes/light-theme'

const Tab = createMaterialBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={theme.iconOnPressColor}
      shifting={true}
    >
      <Tab.Screen
        name="Home"
        component={Home}
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
        component={Favorites}
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
        component={UserView}
        options={{
          tabBarLabel: 'Perfil',
          tabBarColor: theme.tertiaryColor,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default AuthRoutes