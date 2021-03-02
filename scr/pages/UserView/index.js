import React from 'react'
import auth from '@react-native-firebase/auth'
import { logoff } from '../../services/authMethods'
import { Container, Button, ButtonTitle, Email, UserPhoto } from './styles'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

export default function UserView() {

    const user = auth().currentUser

    return (
        <Container>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <UserPhoto style={{ width: 200, height: 200, backgroundColor: '#000' }} source={{ uri: 'https://toppng.com/uploads/preview/witch-ravenna-icon-circle-circle-icon-anime-11553496482f2odwxlakf.png' }} />
                <Email>{user.email}</Email>
            </View>


            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Button>
                    <ButtonTitle>Dark Theme</ButtonTitle>
                </Button>

                <Button>
                    <ButtonTitle>Sugestions</ButtonTitle>
                </Button>

                <Button onPress={() => logoff()} >
                    <ButtonTitle>Logout</ButtonTitle>
                </Button>
            </View>

        </Container>
    )
}