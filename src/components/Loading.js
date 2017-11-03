import React, {PropTypes,Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Spinner from 'react-native-spinkit';

class Loading extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
            <View style={{justifyContent: 'center' , alignItems: 'center'}}>
              <Spinner style={styles.spinner} type={'Bounce'} color={'white'}/>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    color: 'red'
  }
});

export default Loading;
