import {useState, useEffect} from 'react'
import {StyleSheet} from 'react-native'
import {divideScale, sinify} from './utils'

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
                    currScale += scGap * dir 
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
    const position = 'absolute'
    const top = 300 * (1 - sf2)
    const left = 300 * sf1
    const background = '#4CAF50'
    return {
        getStyle() {
            return StyleSheet.create({position, left, top, width, height, background})
        }
    }
}