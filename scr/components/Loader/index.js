import React, { useRef, useEffect } from 'react'
import { View, Text, Button, Animated, StyleSheet, Easing } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Loader() {

    const animValue = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.loop(
            Animated.timing(
                animValue,
                {
                    toValue: 1,
                    duration: 3000,
                    easing: Easing.linear,
                    useNativeDriver: true
                })
        ).start()
    }, [])

    const spin = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

//     function cropPicker () {
//         ImagePicker.openCropper({
//         path: logo,
//         width: 300,
//         height: 400
//       }).then(image => {
//         console.log(image);
//       });
// }

    const styles = StyleSheet.create({
        obj: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',

            backgroundColor: '#d3d3d3'
        },
        spiner: {
            width: 200,
            height: 200,
            borderRadius: 100,
            padding: 30,
            backgroundColor: 'transparent',
            marginBottom: 30,
            transform: [{ rotate: spin }]
        },
        text: {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray'
        }
    })

    return (
        <View style={styles.obj}>
            <Animated.View style={styles.spiner}>
              <MaterialCommunityIcons name="heart" color='blue' size={26} />
                
            </Animated.View>
            <Text style={styles.text}>Carregando...</Text>
            {/* <Button title="crop" onPress={cropPicker} ></Button> */}
        </View>

    )
}

