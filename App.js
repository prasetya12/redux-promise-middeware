import React,{Component} from 'react'
import {View} from 'react-native'

import {createStackNavigator,createAppContainer} from 'react-navigation'

import Home from './src/screens/Home'

const App = createStackNavigator({
  Home,
  Setting
},
{
  initialRouteName:'Home'
})



export default createAppContainer(App)