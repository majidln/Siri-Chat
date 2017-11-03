import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const window = Dimensions.get('window');

class Message extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    
    if (this.props.source === 'me') {
      const {me, meHolder} = styles;
      return (
        <View style={meHolder}>
          <View style={me}>
          <Text>{this.props.content}</Text>
        </View>
        </View>
      );
    } else { 
      const {other, otherHolder, triangle} = styles;
      return (
        <View style={otherHolder}>
          <LinearGradient 
          start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
          locations={[0,1.0]}
          colors={['#3ab6f1', '#49dff4']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            {this.props.content}
          </Text>
        </LinearGradient>
        <Image style={triangle} source={require('../../../images/triangle.png')}/>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  meHolder: {
    flexDirection: 'row'
  },
  me: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 20,
    backgroundColor: 'white',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'white'
  },
  other: {
    marginTop: 30
  },
  otherHolder: {
    flexDirection: 'row-reverse'
  },
  linearGradient: {
    paddingRight: 15,
    borderRadius: 100,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    marginRight: 20
  },
  buttonText: {
    textAlign: 'right',
    color: '#ffffff',
    backgroundColor: 'transparent'
  },
  triangle: {
    width: 10,
    height: 10,
    position: 'absolute',
    bottom: -10,
    right: window.width - 50
  }
});

export default Message;
