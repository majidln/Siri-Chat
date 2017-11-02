import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');

class SpeakingBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
          <View style={styles.container}>
            <Text>SpeakingBar</Text>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    color: 'blue',
    backgroundColor: 'transparent'
  },
  imageHolder: {
    width: 60,
    height: 60,
    marginRight: window.width - 150,
    padding: 5,
    borderRadius: 30,
    borderColor: 'white',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50
  }
});

export default SpeakingBar;
