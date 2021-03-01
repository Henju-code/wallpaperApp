import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import theme from '../../themes/light-theme'

import Home from '../../pages/Home/index'
import Favorites from '../../pages/Favorites/index'
import Profile from '../../pages/Profile/index'

const HomeStack = createStackNavigator();
const FavoritesStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: theme.primaryColor
        },
        headerTintColor: theme.titleColor,
        headerTitleStyle: {
            fontWeight: theme.titleFontWeight
        }
    }}>
        <HomeStack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
    </HomeStack.Navigator>
);

export const FavoritesStackScreen = () => (
    <FavoritesStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: theme.secondaryColor
        },
        headerTintColor: theme.titleColor,
        headerTitleStyle: {
            fontWeight: theme.titleFontWeight
        }
    }}>

        <FavoritesStack.Screen name="Favorites"
            component={Favorites}
            options={{ title: 'Favorites' }}>
        </FavoritesStack.Screen>
    </FavoritesStack.Navigator>
);

export const ProfileStackScreen = () => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: theme.quaternaryColor
        },
        headerTintColor: theme.titleColor,
        headerTitleStyle: {
            fontWeight: theme.titleFontWeight
        }
    }}>
        <ProfileStack.Screen name="Profile" component={Profile} options={{
            title: 'Profile',
        }}>

        </ProfileStack.Screen>
    </ProfileStack.Navigator>
);