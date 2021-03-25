import React, { useState, useEffect } from 'react'
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Animated,
    Keyboard
} from 'react-native'

import theme from '../../themes/light-theme'
import FocusAwareStatusBar from '../../components/StatusBar/index'
import { registerUser } from '../../services/Firebase/Auth/authMethods'

export default function Register() {

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }))
    const [opacity] = useState(new Animated.Value(0))
    const [logo] = useState(new Animated.ValueXY({ x: 130, y: 155 }))

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordConfirmation, setPasswordConfirmation] = useState(null)

    useEffect(() => {

        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)


        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200
            })
        ]).start()
    }, [])


    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 55,
                duration: 100
            }),
            Animated.timing(logo.y, {
                toValue: 65,
                duration: 100
            })
        ]).start()
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 130,
                duration: 100
            }),
            Animated.timing(logo.y, {
                toValue: 155,
                duration: 100
            })
        ]).start()
    }

    function createUser() {
        if (email === null || password === null || passwordConfirmation === null) {
            alert('Preencha todos os campos!')
        } else if (password !== passwordConfirmation) {
            alert('As senhas não correspondem! Por favor, tente novamente.')
        } else {
            registerUser(email, password);
        }
    }

    return (

        <KeyboardAvoidingView style={styles.background} >
            <FocusAwareStatusBar barStyle="light-content" backgroundColor={theme.profileColor} />

            <View style={styles.containerLogo}>
                <Animated.Image style={{ width: logo.x, height: logo.y }}
                    source={require('../../assets/logo.png')}
                />
            </View>

            <Animated.View style={[
                styles.container,
                {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }
            ]}>
                <TextInput placeholder="Email"
                    style={styles.input}
                    autoCorrect={false}
                    onChangeText={(userEmail) => { setEmail(userEmail) }}
                />

                <TextInput placeholder="Senha"
                    style={styles.input}
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(password) => { setPassword(password) }}
                />

                <TextInput placeholder="Confirme sua Senha"
                    style={styles.input}
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(passwordConfirmation) => { setPasswordConfirmation(passwordConfirmation) }}
                />

                <TouchableOpacity style={styles.buttonSubmit}
                    onPress={() => { createUser()}}
                >
                    <Text style={styles.submitText}>Registrar-se</Text>
                </TouchableOpacity>

            </Animated.View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50
    },
    input: {
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10
    },
    buttonSubmit: {
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    submitText: {
        color: '#fff',
        fontSize: 18
    },
    buttonRegister: {
        marginTop: 10
    },
    registerText: {
        color: '#fff'
    }
})