/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
// import components
import HomeScreen from './Component/HomeScreen';
import DetailScreen from './Component/DetailScreen';

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailScreen,
},
{
  initialRouteName: 'Home',
});

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
