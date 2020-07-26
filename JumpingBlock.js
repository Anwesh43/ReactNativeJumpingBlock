import {useAnimatedScale, useStyle} from './hooks'
import React from 'react'
import {View} from 'react-native'

const JumpingBlock = ({}) => {
    const {scale, start} = useAnimatedScale(0.02 / 2, 20)
    const {getStyle} = useStyle()
    return <View style = {getStyle(scale)} onPress = {start}>
    </View>
}