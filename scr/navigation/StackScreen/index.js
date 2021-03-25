import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import theme from '../../themes/light-theme'

import Home from '../../pages/Home/index'
import Favorites from '../../pages/Favorites/index'
import Profile from '../../pages/Profile/index'
//import Cine from '../../pages/Cine/index'
import Loader from '../../components/Loader/index'

const HomeStack = createStackNavigator()
const FavoritesStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const CineStack = createStackNavigator()

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
        <HomeStack.Screen name="Home" component={Home} options={{ title: 'Coleções' }} />
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
            options={{ title: 'Favoritos' }}>
        </FavoritesStack.Screen>
    </FavoritesStack.Navigator>
);

export const CineStackScreen = () => (
    <CineStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: theme.tertiaryColor
        },
        headerTintColor: theme.titleColor,
        headerTitleStyle: {
            fontWeight: theme.titleFontWeight
        }
    }}>

        <CineStack.Screen name="Cine"
            component={Loader}
            options={{ title: 'Cinema' }}>
        </CineStack.Screen>
    </CineStack.Navigator>
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
            title: 'Perfil',
        }}>

        </ProfileStack.Screen>
    </ProfileStack.Navigator>
);