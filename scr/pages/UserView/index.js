import React, { useState } from 'react'
import { Modal } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { logoff } from '../../services/Firebase/Auth/authMethods'

import { SuggestionBox } from './SuggestionBox/index'
import { Carousel } from './Carousel'

import {
    Container,
    WaveBackground,
    Header,
    UserPhotoContainer,
    UserPhoto,
    ButtonContainer,
    Button
} from './styles'



export function UserView() {

    const [visible, setVisible] = useState(false)

    const userPhoto = 'https://toppng.com/uploads/preview/witch-ravenna-icon-circle-circle-icon-anime-11553496482f2odwxlakf.png'
    
    return (
        <Container>
            <WaveBackground source={require('../../assets/wave.png')} >
                <Modal
                  visible={visible}
                  animationType='slide'
                  transparent
                  onRequestClose={() => {
                      setVisible(false);
                  }}>                     
                      <SuggestionBox setVisible={setVisible} />       
                  </Modal>
                <Header>

                    <UserPhotoContainer>
                        <UserPhoto source={{uri: userPhoto}} />
                    </UserPhotoContainer>

                    <ButtonContainer>
                        <Button left={50}>
                            <MaterialCommunityIcons name='weather-night' color='#fff' size={26} />
                        </Button>

                        <Button left={80} onPress={() => setVisible(true)} >
                            <MaterialCommunityIcons name='email-plus-outline' color='#fff' size={26} />
                        </Button>

                        <Button left={50} onPress={() => logoff()} >
                            <MaterialCommunityIcons name='exit-to-app' color='#fff' size={26} />
                        </Button>
                    </ButtonContainer>
                </Header>

                <Carousel />
            </WaveBackground>
        </Container>
    )
}