import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderSlides() {
    return this.props.data.map((slide) => {
      return (
      <View key={slide.text} style={styles.slideStyle}>
        <Text style={styles.textStyle}>{slide.text}</Text>
      </View>
    );
    })
  }
  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1}}
        paginEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    )
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideText: {
    fontSize: 30
  }
}

export default Slides;