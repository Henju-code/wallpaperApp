import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
const { height } = Dimensions.get('screen')

export const Container = styled.View`
    bottom: ${-height * 0.115}
`;