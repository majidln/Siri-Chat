import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ListView
} from 'react-native';
import Item from './OptionsItem';

const window = Dimensions.get('window');

class Buttons extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['First One' , 'Second One', 'Don\'t Call' , 'Who\'s That'])
    };
  }

  render() {
    return (
      <View style={styles.container}>
            <ListView
            horizontal={true}
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Item text={rowData}></Item>}
            />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    padding: 15
  }
});

export default Buttons;
