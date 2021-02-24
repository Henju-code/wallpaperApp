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