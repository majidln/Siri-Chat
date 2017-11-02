import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const window = Dimensions.get('window');

class DrawerIcon extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
          <View style={styles.container}>
            <Icon
                style={styles.main}
                name={this.props.iconDefault}
                size={20}
            />
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

export default DrawerIcon;
