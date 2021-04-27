import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

import theme from '../../../themes/light-theme'

export const Container = styled.View` 
    flex: 1;
    flex-direction: column;
    background-color: transparent;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.View`
    width: ${Dimensions.get('window').width * 0.85};
    height: ${Dimensions.get('window').width * 0.85};
    background-color: #fff;
    align-items: center;
    border-radius: 15;
    padding-left: 15;
    padding-right: 15;
    justify-content: space-around;
    border-width: 5;
    border-color: ${theme.tertiaryColor}
`;

export const Close = styled.TouchableOpacity`
    position: absolute;
    right: 10
`;

export const BoxTitle = styled.Text`
    font-size: 18;
    text-align: center;
    color: ${theme.tertiaryColor};
    margin-top: 20;
    border-bottom-width: 1;
    border-color: gray
    
`;

export const InputArea = styled.TextInput`
    border-width: 1;
    border-radius: 12;
    border-color: ${theme.tertiaryColor};
    width: 80%;
    height: 60%;
`;

export const Button = styled.TouchableOpacity`
    width: ${Dimensions.get('window').width * 0.4};
    height: 40px;
    border-radius: 12px;
    justify-content: center;
    align-items: center
`;

export const ButtonText = styled.Text`
    color: ${theme.tertiaryColor};
    font-size: 16;
    font-weight: bold
`;