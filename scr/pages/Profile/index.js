import React from 'react'
import {
  View
 
} from 'react-native'

import theme from '../../themes/light-theme'
import FocusAwareStatusBar from '../../components/StatusBar/index'
import AuthVerification from '../../services/authVerification'

export default function Profile() {

  return (
    <View style={{flex: 1}}>
      <AuthVerification />
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={theme.profileColor} />
    </View>      
  )
}
