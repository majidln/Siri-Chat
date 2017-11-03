import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import ContactItem from './ContactItem';

const window = Dimensions.get('window');

class Contact extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {container, titleHolder, itemHolder} = styles;
    const titleText = 'Which one? There are 2 contacts named Elizabet in your list.';
    return (
          <View style={container}>
            <View style={titleHolder}>
              <Text>{titleText}</Text>
            </View>
            <View style={itemHolder}>
              <ContactItem name={'Elizabeth Olsen'} number={'09331754802'} image={require('../../images/pic1.png')}/>
              <ContactItem name={'Emillia Elizabeth'} number={'09331754802'} image={require('../../images/pic2.png')}/>
            </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 20,
    padding: 15,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#3ab6f1',
    shadowOpacity: .5,
    borderRadius: 10
  },
  titleHolder: {
  },
  itemHolder: {

  }
});

export default Contact;
