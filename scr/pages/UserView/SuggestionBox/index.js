import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import theme from '../../../themes/light-theme'
import { 
    Container, 
    Box, 
    BoxTitle, 
    InputArea, 
    Close,
    Button,
    ButtonText
 } from './styles'

export function SuggestionBox({setVisible}) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Box>
                    <Close onPress={() => {setVisible(false)}}>
                        <MaterialCommunityIcons 
                            name="close" 
                            color={theme.quaternaryColor} 
                            size={24} 
                        />
                    </Close>

                    <BoxTitle>
                        Caixinha de sugestão :)
                    </BoxTitle>

                    <InputArea
                        multiline={true}
                        numberOfLines={10}
                        placeholder="Digite aqui a sua sugestão!"
                        textAlign={'center'}
                    />

                    <Button>
                        <ButtonText>Enviar</ButtonText>
                    </Button>
                </Box>
            </Container>
        </TouchableWithoutFeedback>
    )
}