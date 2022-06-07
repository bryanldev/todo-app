import { Buffer } from 'buffer'
import 'react-native-get-random-values'
import { AppContainer } from '@/components'
import { Routes } from '@/routes'
import React from 'react'

global.Buffer = global.Buffer || Buffer

export default function App() {
  return (
    <AppContainer>
      <Routes />
    </AppContainer>
  )
}
