import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Linking
} from 'react-native';
import Button from './CallButton';

const window = Dimensions.get('window');

class ContactItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {container, imageHolder, contentHolder, opHolder, image, name, number, call} = styles;
  
    return (
          <View style={container}>
            <View style={imageHolder}>
              <Image style={image} source={this.props.image} resizeMode='cover'/>
            </View>
            <View style={contentHolder}>
              <Text style={name}>{this.props.name}</Text>
              <Text style={number}>{this.props.number}</Text>
            </View>
            <View style={opHolder}>
              <Button
                onPress={() => this.startCall('tel:' + this.props.number)}>
                <Text style={call}>Call</Text>
              </Button>
            </View>
          </View>
    );
  }

  startCall = (number) => {
    Linking.canOpenURL(number).then(supported => {
      if (supported) {
        Linking.openURL(number);
      } else {
        console.log('Don\'t know how to open URI: ' + number);
      }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingBottom: 10
  },
  imageHolder: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50
  },
  image: {
    width: 40,
    height: 40
  },
  contentHolder: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  number: {
    fontSize: 12,
    fontWeight: 'normal'
  },
  opHolder: {
    width: 50
  },
  call: {
    textAlign: 'center',
    color: '#3ab6f1'
  }
});

export default ContactItem;
