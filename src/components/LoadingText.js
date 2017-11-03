import React, {Component} from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

class LoadingText extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      counter: -1
    };
  }

  componentDidMount() {
    this.setState({text: this.props.text});
    this.counter();
  }

  counter = () => {
    setTimeout(
      () => { this.dots(); },
      500
    );
  }

  dots = () => {
    this.setState({counter: this.state.counter + 1});
    console.log(this.state.counter , this.state.counter > 3);
    if (this.state.counter > 3) {
      this.setState({counter: -1});
    }else{
      let concat = '';
      for (let i = 0 ; i < this.state.counter; i++) {
        console.log('i' , i);
        concat += '.';
      }
  
      this.setState({text: this.props.text + concat});
    }

    
    this.counter();
  }

  render() {
    return (
      <Text style={styles.textListinig} >{this.state.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  textListinig: {
    fontSize: 12,
    color: 'white'
  }
});

export default LoadingText;
