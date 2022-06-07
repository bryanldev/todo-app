import { DrawerContentComponentProps } from '@react-navigation/drawer'
import {
  Avatar,
  Center,
  Heading,
  HStack,
  IconButton,
  useColorModeValue,
  VStack
} from 'native-base'
import React, { useCallback, VFC } from 'react'
import { AnimatedColorBox } from './animated-color-box'
import { MenuButton } from './menu-button'
import { ThemeToggle } from './theme-toggle'
import { Feather } from '@expo/vector-icons'
import ProfileImage from '@/assets/profile-image.png'
import MastheadImage from '@/assets/masthead.png'

export const SideBar: VFC<DrawerContentComponentProps> = function ({
  navigation,
  state
}) {
  const currentRoute = state.routeNames[state.index]

  const handlePressBackButton = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])
  const handlePressMenuMain = useCallback(() => {
    navigation.navigate('Main')
  }, [navigation])
  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate('About')
  }, [navigation])

  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      bg={useColorModeValue('blue.50', 'darkBlue.800')}
      p={7}
    >
      <VStack flex={1} space={2}>
        <HStack justifyContent="flex-end">
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('blue.300', 'darkBlue.700')}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('blue.800', 'darkBlue.700')
            }}
          />
        </HStack>
        <Avatar
          source={{
            uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          }}
          size="xl"
          borderRadius={100}
          mb={6}
          borderWidth={3}
        />
        <Heading mb={4} size="xl">
          Bryan Santos
        </Heading>
        <MenuButton
          active={currentRoute === 'Main'}
          onPress={handlePressMenuMain}
          icon="inbox"
        >
          Tasks
        </MenuButton>
        <MenuButton
          active={currentRoute === 'About'}
          onPress={handlePressMenuAbout}
          icon="info"
        >
          About
        </MenuButton>
      </VStack>
      <Center>
        <ThemeToggle />
      </Center>
    </AnimatedColorBox>
  )
}
