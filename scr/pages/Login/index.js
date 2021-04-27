import React, { useState, useEffect } from 'react'
import {
    View,
    KeyboardAvoidingView,
    TouchableOpacity,
    Text,
    StyleSheet,
    Animated,
    Keyboard,
    TextInput
} from 'react-native'
//import { TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import FocusAwareStatusBar from '../../components/StatusBar/index'
import { signInUser } from '../../services/Firebase/Auth/authMethods'

import theme from '../../themes/light-theme'

export function Login() {

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }))
    const [opacity] = useState(new Animated.Value(0))
    const [logo] = useState(new Animated.ValueXY({ x: 130, y: 155 }))

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const navigation = useNavigation()

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

    function signIn(email, password) {
        if (email === null || password === null) {
            alert('Preencha todos os campos!')
        } else {
            signInUser(email, password);
        }
    }

    return (

        
        
            // <FocusAwareStatusBar barStyle="light-content" backgroundColor={theme.profileColor} />
            
            <View style={styles.container}>

            {/* <View style={styles.containerLogo}>
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
            ]}> */}
                <TextInput 
                    
                    placeholder="Email"
                    style={styles.input}
                    autoCorrect={false}
                    onChangeText={(userEmail) =>  setEmail(userEmail) }
                />

                <TextInput 
                    
                    placeholder="Senha"
                    style={styles.input}
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(password) =>  setPassword(password) }
                />

                <TouchableOpacity 
                    style={styles.buttonSubmit}
                    onPress={() => { signIn(email, password) }}
                >
                    <Text style={styles.submitText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.registerText}>Cadastrar-se</Text>
                </TouchableOpacity>

            {/* </Animated.View> */}
            </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50,
        marginTop: 40
    },
    containerLogo: {
        justifyContent: 'center'
    },
    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: '#d3d3d3'
    },
    input: {
        // backgroundColor: '#fff',
        width: 120,
        height: 60,
        marginTop: 100,
        color: '#d3d3d3',
        fontSize: 17,
        borderRadius: 7,
        padding: 10
    },
    buttonSubmit: {
        // backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 100
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