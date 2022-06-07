import { Box, Heading, Image, VStack } from 'native-base'
import React, { FC } from 'react'
import { ImageSourcePropType } from 'react-native'

interface Props {
  title: string
  image: ImageSourcePropType
}

export const Masthead: FC<Props> = function ({ title, image, children }) {
  return (
    <VStack height="300px" paddingBottom={5}>
      <Image
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        width="full"
        height="300px"
        resizeMode="cover"
        source={image}
        alt="masthead image"
      />
      {children}
      <Box flex={1} />
      <Heading color="white" padding={6} size="xl">
        {title}
      </Heading>
    </VStack>
  )
}
