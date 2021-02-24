import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import theme from '../../themes/light-theme'

const UpdateStack = createStackNavigator();

const UpdateStackScreen = () => (
    <UpdateStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: theme.updatesColor
        },
        headerTintColor: theme.titleColor,
        headerTitleStyle: {
          fontWeight: theme.titleFontWeight
        }
    }}>
      <UpdateStack.Screen name="Update" component={Updates} options={{
        title: 'Update',
      }}>
  
      </UpdateStack.Screen>
    </UpdateStack.Navigator>
  );

function Updates(){
  return(
    <View>

    </View>
  )
}

export default UpdateStackScreen;