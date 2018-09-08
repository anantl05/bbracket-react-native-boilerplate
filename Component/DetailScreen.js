import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class DetailScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const itemID = navigation.getParam('itemId', 'NO_ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Lightening Detail Screen</Text>
        <Text>Item ID passed: {JSON.stringify(itemID)}</Text>
        <Text>Other Param passed: {JSON.stringify(otherParam)}</Text>
      </View>
    );
  }
}