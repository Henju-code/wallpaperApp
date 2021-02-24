import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabScreen from './components/TabBottonNavigation/index'
import WallpaperView from './pages/WallpaperView/index'

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="MainTabScreen" component={MainTabScreen} />
        <Stack.Screen options={{
            headerStyle:{
              backgroundColor: '#000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
            }}
            name="WallpaperView" component={WallpaperView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}