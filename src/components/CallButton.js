import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class CallButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {container} = styles;
    return (
          <TouchableHighlight
            style={container}
          onPress={() => this.props.onPress()}>
          {this.props.children}
          </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    borderColor: 'green',
    borderWidth: 1,
    color: 'green',
    padding: 5
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

export default CallButton;
