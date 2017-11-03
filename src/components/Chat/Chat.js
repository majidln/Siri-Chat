import React, {Component} from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  Dimensions
} from 'react-native';
import ChatItem from './ChatItem';

const window = Dimensions.get('window');

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          source: 'me',
          content: 'Hey Khalid! What can I help you?'
        },
        {
          source: 'other',
          content: 'Call Elizabeth'
        },
        {
          source: 'me',
          content: 'Who????'
        },
        {
          source: 'other',
          content: 'Dear Elizabeth'
        },
        {
          source: 'me',
          content: 'Who???? again'
        },
        {
          source: 'other',
          content: 'Dear EEEEElizabeth'
        }
      ]
    };
  }

  render() {
    return (
          <View style={styles.container}>
            {this.renderItem()}
          </View>
    );
  }

  renderItem = () => {
    let xxx = this.state.items.map(function(value, i){
      return (
        <ChatItem key={i} content={value.content} source={value.source}></ChatItem>
      );
    });
    return xxx;
  }
}

const styles = StyleSheet.create({
  container: {
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

export default Chat;
