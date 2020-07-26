import {useState, useEffect} from 'react'
import {StyleSheet} from 'react-native'
import {divideScale, sinify} from './util'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale 
                const interval = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useStyle = (scale) => {
    const sf = sinify(scale)
    const sf1 = divideScale(sf, 0, 2)
    const sf2 = divideScale(sf, 1, 2)
    const width = 30
    const height = 30
    const top = 300 * (1 - sf2)
    const left = 300 * sf1
    const backgroundColor = 'rgba(61, 90, 254,1.0)'
    return {
        getStyle() {
            return StyleSheet.create({block : {left, top, width, height, backgroundColor}})
        }
    }
}