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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
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
        }
      ])
    };
  }

  render() {
    return (
          <View style={styles.container}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <ChatItem content={rowData.content} source={rowData.source}></ChatItem>}
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

export default Chat;
