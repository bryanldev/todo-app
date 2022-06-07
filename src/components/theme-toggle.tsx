import React from 'react'
import { HStack, useColorMode, Text, Switch } from 'native-base'

export const ThemeToggle: React.VFC = function () {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch isChecked={colorMode === 'light'} onToggle={toggleColorMode} />
      <Text>Light</Text>
    </HStack>
  )
}
