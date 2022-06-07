import React, { VFC, useCallback } from 'react'
import * as Linking from 'expo-linking'
import { Button, IButtonProps } from 'native-base'

interface Props extends IButtonProps {
  href: string
}

export const LinkButton: VFC<Props> = function ({ href, ...props }) {
  const handlePress = useCallback(() => {
    Linking.openURL(href)
  }, [href])

  return <Button {...props} onPress={handlePress} />
}
