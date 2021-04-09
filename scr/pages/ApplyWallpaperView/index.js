import React, { useState, useEffect } from 'react'
import { Modal, View, Text, TouchableOpacity, ImageBackground, StatusBar, SafeAreaView } from 'react-native'
import ManageWallpaper, { TYPE } from 'react-native-manage-wallpaper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'


export default function ApplyWallpaperView ({ route }) {

    const navigation = useNavigation()
    const [applyType, setApplyType] = useState('')
    const [modalVisible, setModalVisible] = useState(true)
    const choiseType = [{
        description: "Tela inicial e tela de bloqueio",
        type: TYPE.BOTH,
        icon: "cellphone"
    }, {
        description: "Tela inicial",
        type: TYPE.HOME,
        icon: "home"
    }, {
        description: "Tela de bloqueio",
        type: TYPE.LOCK,
        icon: "lock"
    }]

    useEffect(() => {
        if (applyType !== '') {
            async function setWallpaper () {
                try {
                    await ManageWallpaper.setWallpaper(
                        {
                            uri: route.params.image,
                        },
                        callback(),
                        applyType
                    );
                } catch (error) {
                    alert('Error => ', error),
                    console.error(error)
                }
            }
            setWallpaper()
        }    
    }, [applyType])

    function callback() {
        navigation.goBack()
    };

    

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
            <ImageBackground
                style={{ justifyContent: 'center', flex: 1 }}
                source={{ uri: route.params.image }}
            >
                <Modal
                    visible={modalVisible}
                    animationType='slide'
                    transparent
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{
                            width: 300,
                            height: 300,
                            backgroundColor: '#000',
                            opacity: 0.75,
                            alignItems: 'stretch',
                            borderRadius: 15
                        }}>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: 'bold',
                                color: 'white',
                                marginTop: 20,
                                paddingLeft: 15

                            }}>Aplicar papel de parede em:</Text>

                            {
                                choiseType.map((item) =>
                                    <View>
                                        <Divider style={{ height: 1.5, marginTop: 15 }} />

                                        <TouchableOpacity
                                            style={{
                                                flexDirection: 'row',
                                                marginLeft: 10,
                                                marginTop: 15
                                            }}
                                            onPress={() => {  
                                                setApplyType(item.type),
                                                setModalVisible(false)
                                            }}>

                                            <MaterialCommunityIcons
                                                name={item.icon}
                                                color={'#fff'}
                                                size={25}
                                            />

                                            <Text style={{
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                                color: 'white',
                                                marginLeft: 5
                                            }}>{item.description}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                            <Divider style={{ height: 1.5, marginTop: 15 }} />
                        </View>
                    </View>
                </Modal>
            </ImageBackground>
        </SafeAreaView>
    )
}