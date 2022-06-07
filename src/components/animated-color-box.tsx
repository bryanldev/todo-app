import usePrevious from '@/utils/use-previous'
import { Box, useToken } from 'native-base'
import React, { useEffect, FC } from 'react'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

const AnimatedBox = Animated.createAnimatedComponent(Box)

export const AnimatedColorBox = ({ bg, ...props }: any) => {
  const hexBg = useToken('colors', bg)
  const prevHexBg = usePrevious(hexBg)
  const progress = useSharedValue(0)

  useEffect(() => {
    progress.value = 0
  }, [hexBg])

  const animatedStyles = useAnimatedStyle(() => {
    progress.value = withTiming(1, { duration: 200 })
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [prevHexBg || hexBg, hexBg]
      )
    }
  }, [hexBg])

  return <AnimatedBox {...props} style={animatedStyles} />
}
