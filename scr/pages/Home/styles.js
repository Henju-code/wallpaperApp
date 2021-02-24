import styled from 'styled-components/native'

export const Container = styled.View`
    flex:1;
    padding-top: 10;
    background-color: #d3d3d3
`;

export const Item = styled.View`
    align-items: center;
    justify-content: center;
    flex:1;
    margin:1px;
    height: ${props => `${props.height}`}
`;

export const Invisible = styled.View`
    background-color: transparent;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 1px;
    height: ${props => `${props.height}`}
`;

export const Thumbnail = styled.Image`
    width: ${props => `${props.width}`};
    height: ${props => `${props.height}`}
`;