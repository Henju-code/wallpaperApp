import styled from 'styled-components/native'
import theme from '../../themes/light-theme'

export const Container = styled.View`
    flex:1;
    padding-top: 10;
    background-color: #d3d3d3;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${theme.quaternaryColor};
    border-radius: 7px;
    padding: 10px;
    margin-top: 20px;
    align-items: center
`;

export const ButtonTitle = styled.Text`
    color: ${theme.titleColor};
    font-size: 20px;
`;

export const Email = styled.Text`
    font-size: 20;
    font-weight: bold;
    background-color: #fff;
    color: ${theme.quaternaryColor};
    border-radius: 20px;
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px
`;

export const UserPhoto = styled.Image`
    width: 200px;
    height: 200px;
    border: 5px;
    border-radius: 100px;
    border-color: ${theme.quaternaryColor}
`;