import { SideBar } from '@/components/sidebar'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { VFC } from 'react'
import { AboutScreen, MainScreen } from '../screens'

const Drawer = createDrawerNavigator()

export const Routes: VFC = function () {
  return (
    <Drawer.Navigator
      drawerContent={props => <SideBar {...props} />}
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#00000000'
      }}
    >
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  )
}
