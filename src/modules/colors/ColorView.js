import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import Header from '../../components/Header';
import Chat from '../../components/Chat/Chat';
import Contact from '../../components/Contact';
import Options from '../../components/Options/Options';
import SpeakingBar from '../../components/Bar/SpeakingBar';

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
    const {container, scroll, barHolder} = styles;
    return (
      <View style={container}>
        <ScrollView 
          style={scroll}
          ref={ref => this.scrollView = ref}
          onContentSizeChange={(contentWidth, contentHeight)=>{        
              this.scrollView.scrollToEnd({animated: true});
          }}>
          <Chat/>
          <Contact/>
          <Options/>
        </ScrollView>
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
    backgroundColor: '#F6F6F6',
    paddingBottom: 80
  },
  barHolder: {
    position: 'absolute',
    height: 90,
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default ColorView;
