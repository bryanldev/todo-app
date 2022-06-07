import React, { useCallback, VFC } from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { HStack, IconButton } from 'native-base'
import { Feather } from '@expo/vector-icons'

export const NavBar: VFC = function () {
  const navigation = useNavigation<DrawerNavigationProp<{}>>()

  const handlePressMenuButton = useCallback(
    () => navigation.openDrawer(),
    [navigation]
  )

  return (
    <HStack
      width="full"
      height={40}
      alignItems="center"
      alignContent="center"
      padding={4}
    >
      <IconButton
        onPress={handlePressMenuButton}
        _icon={{
          as: Feather,
          name: 'menu',
          size: 6,
          color: 'white'
        }}
      />
    </HStack>
  )
}
