import styled from 'styled-components/native'
import Theme from '../../../../themes/light-theme'
import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

export const Content = styled.View`
    flex:1;
    width: ${props => `${props.width}`};
    height: ${props => `${props.height}`};
    border-right-color: #fff;
    border-right-width: 1;
    justify-content: space-around;
    align-items: center;
    background-color: ${Theme.tertiaryColor};
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const Title = styled.Text`
    font-size: 20;
    font-weight: bold;
    color: #fff;
    text-align: center;
`;

export const Description = styled.Text`
    font-size: 15;
    color: #fff;
    top: -40px
`;

export const Score = styled.Text`
    font-size: 20;
    color: ${Theme.tertiaryColor};
    font-weight: bold;
`;

export const Button = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    top: -20px
`;

export const styles = StyleSheet.create({
    cardBackground: {
        width: width *0.75,
        height: width * 0.60,
        top: 40,
        opacity: .8
    }
})