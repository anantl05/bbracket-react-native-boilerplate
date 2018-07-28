import React, {Component} from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
    render() {
      return (
        <Text>Hello {this.props.name}!</Text>
      );
    }
  }

export default class HelloWorld extends Component {
    render() {
        return(
            <View>
                <Greeting name="Anant" />
                <Greeting name="Anish" />
                <Greeting name="Antony" />
                <Greeting name="Ati" />
            </View> 
        );
    }
}