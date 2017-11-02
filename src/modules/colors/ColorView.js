import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Header from '../../components/Header';
import Chat from '../../components/Chat/Chat';
import Contact from '../../components/Contact';
import Buttons from '../../components/Buttons';
import SpeakingBar from '../../components/SpeakingBar';

class ColorView extends Component {
  static displayName = 'ColorView';

  static navigationOptions={
    header: (
          <Header/>
      )}


  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {container, barHolder} = styles;
    return (
      <View style={container}>
        <Chat/>
        <Contact/>
        <Buttons/>
        <View style={barHolder}>
          <SpeakingBar />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6'
  },
  barHolder: {
    position: 'absolute',
    height: 70,
    backgroundColor: 'blue',
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default ColorView;
