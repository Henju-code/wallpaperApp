import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    
`;

export const Wallpaper = styled.Image`
    margin-top: 50px;
    border-radius: 16px;
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
`;

export const ButtonBar = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: row;

`;