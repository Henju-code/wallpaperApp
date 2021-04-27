import React from 'react'
import theme from '../../themes/light-theme'
import FocusAwareStatusBar from '../../components/StatusBar/index'
import AuthVerification from '../../services/Firebase/Auth/authVerification'
import { Container } from './styles'

export default function Profile() {
  return (
    <Container>
      <AuthVerification />
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={theme.tertiaryColor} />
    </Container>      
  )
}
