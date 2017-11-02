import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  Image
} from 'react-native';
import DrawerIcon from './DrawerIcon';
import LinearGradient from 'react-native-linear-gradient';

const window = Dimensions.get('window');
const height = Platform === 'ios' ? 64 : 56;

class Header extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
    <LinearGradient
    start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
    locations={[0,1.0]}
    colors={['#3ab6f1', '#49dff4']}
    style={styles.linearGradient}>
        <DrawerIcon iconDefault={'awareness-ribbon'}/>
        <Text style={styles.title}>
            Nava
        </Text>
    </LinearGradient>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    height: height,
    paddingLeft: 10,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    height: height,
    width: window.width,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default Header;
