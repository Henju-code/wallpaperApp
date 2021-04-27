import styled from 'styled-components/native'
import { StyleSheet, Dimensions } from 'react-native'
import theme from '../../themes/light-theme'

const { width } = Dimensions.get('screen')
const DOT_SIZE = 8
const DOT_SPACING = 8
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING

export const Pagination = styled.View`
    position: absolute;
    left: ${(width / 2) - DOT_SIZE * 2.5};
    top: 5;
    flex-direction: row;
    margin-top: 40px;
    left: 10
`;

export const Dot = styled.View`
    width: ${DOT_SIZE};
    height: ${DOT_SIZE};
    border-radius: ${DOT_SIZE};
    background-color: #d3d3d3;
    border-width: 1;
    margin-right: ${DOT_SPACING}
`;

export const Styles = StyleSheet.create({
    dotIndicator: {
        width: DOT_INDICATOR_SIZE,
        height: DOT_INDICATOR_SIZE,
        borderRadius: DOT_INDICATOR_SIZE,
        borderWidth: 1,
        borderColor: theme.tertiaryColor,
        position: 'absolute',
        left: -DOT_SIZE / 2,
        top: -DOT_SIZE / 2
    }
})