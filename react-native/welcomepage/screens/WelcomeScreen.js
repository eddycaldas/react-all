import React, { Component } from 'react';
import Slides from '../components/Slides'
import { View, Text } from 'react-native';

const SLIDE_DATA = [
  {text: 'Welcome to this App', color: '#009688' },
  {text: "Let's use this App", color: "#03A9F4" },
  {text: 'Couple more pages just in case', color: '#009688' },
  {text: 'This is the last page', color: "#03A9F4" }
]

class WelcomeScreen extends Component {
  render() {
    return (
      <View>
        <Slides data={SLIDE_DATA}/>
      </View>
    )
  }
}

export default WelcomeScreen;