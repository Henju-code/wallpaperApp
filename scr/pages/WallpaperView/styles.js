import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #000
`;

export const Wallpaper = styled.Image`
    border-radius: 16px;
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
`;

export const Button = styled.TouchableOpacity`
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    background-color: #303030;
    width: 60px;
    height: 60px;
    margin-right: 10px;
    margin-left: 10px;
`;

export const ButtonBar = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: row;
`;