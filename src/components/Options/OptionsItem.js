import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class OptionsItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {container, text} = styles;
    return (
          <TouchableOpacity
            style={container}
          onPress={() => console.log('on press option',this.props.text)}>
          <Text style={text}>{this.props.text}</Text>
          </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    borderColor: '#3ab6f1',
    backgroundColor: 'white',
    padding: 10,
    marginRight: 15
  },
  text: {
    color: '#3ab6f1'
  }
});

export default OptionsItem;
