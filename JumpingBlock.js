import {useAnimatedScale, useStyle} from './hooks'
import React from 'react'
import {View} from 'react-native'

const JumpingBlock = ({}) => {
    const {scale, start} = useAnimatedScale(0.02 / 2, 20)
    const {getStyle} = useStyle(scale)
    return <View style = {getStyle().block} onTouchStart = {start}>
    </View>
}

export default JumpingBlock