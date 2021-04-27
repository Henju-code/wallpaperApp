import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from './tab.routes'

import { WallpaperView } from '../pages/WallpaperView'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { ApplyWallpaperView } from '../pages/ApplyWallpaperView'
import { SuggestionBox } from '../pages/UserView/SuggestionBox'

import theme from '../themes/light-theme'

const stackRoutes = createStackNavigator();

const AppRoutes = () => {
    return (
        <stackRoutes.Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.backgroundColor
                }
            }}
        >

            <stackRoutes.Screen
                name="Home"
                component={AuthRoutes}
            />

            <stackRoutes.Screen
                name="Favorites"
                component={AuthRoutes}
            />

            <stackRoutes.Screen
                name="Profile"
                component={AuthRoutes}
            />

            <stackRoutes.Screen
                name="WallpaperView"
                component={WallpaperView}
            />

            <stackRoutes.Screen 
                name="Login" 
                component={Login} 
            />

            <stackRoutes.Screen 
                name="Register"
                component={Register} 
            />

            <stackRoutes.Screen 
                name="ApplyWallpaperView" 
                component={ApplyWallpaperView} 
            />

            <stackRoutes.Screen 
                name="SuggestionBox" 
                component={SuggestionBox} 
            />

        </stackRoutes.Navigator>
    )
}

export default AppRoutes