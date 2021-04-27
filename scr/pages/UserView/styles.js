import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import theme from '../../themes/light-theme'

const { width } = Dimensions.get('screen')

export const Container = styled.View`
    flex:1;
    padding-top: 10;
    background-color: ${theme.tertiaryColor};
    top: -20px;
`;

export const WaveBackground = styled.ImageBackground`
    width: 100%;
    height: 100%
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 50%;
    justify-content: flex-start;
`;

export const UserPhotoContainer = styled.View`
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border-color: #d3d3d3;
    border-width: 1;
`; 

export const UserPhoto = styled.Image`
    width: ${width * 0.50};
    height: ${width * 0.50};
    border: 5px;
    border-radius: 100px;
    border-color: ${theme.tertiaryColor};
    left: 30px;
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    flex-direction: column
`;

export const Button = styled.TouchableOpacity`
    border-radius: 50px;
    border-color: #d3d3d3;
    border-width: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.tertiaryColor};
    width: 60px;
    height: 60px;
    margin-bottom: 5px;
    margin-top: 5px;
    left: ${props => `${props.left}`};
`;