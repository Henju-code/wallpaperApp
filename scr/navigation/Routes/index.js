import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import theme from '../../themes/light-theme'

import MainTabScreen from '../../components/TabBottonNavigation/index'
import WallpaperView from '../../pages/WallpaperView/index'
import Login from '../../pages/Login/index'
import Register from '../../pages/Register/index'
import ApplyWallpaperView from '../../pages/ApplyWallpaperView/index'

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode='none' >

        <Stack.Screen options={{ headerShown: false }}
          name="MainTabScreen" component={MainTabScreen} />

        <Stack.Screen options={{
          headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#000'
          }
        }}
          name="WallpaperView" component={WallpaperView} />

        <Stack.Screen options={{
          headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
          name="Login" component={Login} />

        <Stack.Screen options={{
          headerStyle: {
            backgroundColor: theme.profileColor
          },
          headerTintColor: theme.titleColor,
          headerTitleStyle: {
            fontWeight: theme.titleFontWeight
          }
        }}
          name="Register" component={Register} />

        <Stack.Screen options={{
          //headerShown: false
          headerStyle: {
            backgroundColor: 'white',
            shadowColor: 'transparent',
            elevation: 0,
            marginBottom: -30
          },
          //headerShown: false,
          
        }}
          name="ApplyWallpaperView" component={ApplyWallpaperView} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}