import React, { VFC } from 'react'
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue
} from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import { AnimatedColorBox, LinkButton, Masthead, NavBar } from '@/components'
import AboutImg from '@/assets/about-masthead.png'
import ProfileImg from '@/assets/profile-image.png'

export const AboutScreen: VFC = function () {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead title="About this app" image={AboutImg}>
        <NavBar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={ProfileImg}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text fontSize="md" w="full" textAlign="center">
            This is a React Native app build with Expo.
          </Text>
          <LinkButton
            colorScheme="blue"
            size="lg"
            borderRadius={6}
            href="https://www.linkedin.com/in/bryan-leite-dos-santos/"
            leftIcon={
              <Icon
                as={AntDesign}
                name="linkedin-square"
                size="sm"
                opacity={0.7}
              />
            }
          >
            Go to my LinkedIn
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}
