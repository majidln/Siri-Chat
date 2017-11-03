import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../Icon';
import Loading from '../Loading';
import LoadingText from '../LoadingText';

const window = Dimensions.get('window');

class SpeakingBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jump1: new Animated.Value(0),
      jump2: new Animated.Value(40),
      listinigs: true
    };

    this.cycleAnimation();
  }

  cycleAnimation = () => {
    Animated.sequence([
      Animated.parallel([          // after decay, in parallel:
        Animated.timing(                  // Animate over time
          this.state.jump1,            // The animated value to drive
          {
            toValue: 40,                   // Animate to opacity: 1 (opaque)
            duration: 1000              // Make it take a while
          }
        ),
        Animated.timing(                  // Animate over time
          this.state.jump2,            // The animated value to drive
          {
            toValue: 0,                   // Animate to opacity: 1 (opaque)
            duration: 1000              // Make it take a while
          }
        ),
      ]),
      Animated.parallel([          // after decay, in parallel:
        Animated.timing(                  // Animate over time
          this.state.jump1,            // The animated value to drive
          {
            toValue: 0,                   // Animate to opacity: 1 (opaque)
            duration: 1000              // Make it take a while
          }
        ),
        Animated.timing(                  // Animate over time
          this.state.jump2,            // The animated value to drive
          {
            toValue: 40,                   // Animate to opacity: 1 (opaque)
            duration: 1000              // Make it take a while
          }
        )
      ]),
    ]).start(() => {
      this.cycleAnimation();
    });

  }

  render() {
    const content = this.state.listinigs ? this.renderAnimation() : this.renderIdle();
    return (
          <View style={styles.container}>
            {content}
          </View>
    );
  }

  renderIdle = () => {
    const {barHolder, centerItem} = styles;
    return(
      <View>
        <LinearGradient
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
        locations={[0,1.0]}
        colors={['#3ab6f1', '#49dff4']}
        style={styles.linearGradient}>
        <View style={barHolder}>
          <Icon iconDefault={'menu'}/>
          <Icon iconDefault={'keyboard'}/>
        </View>
      </LinearGradient>
      <View style={centerItem}>
        <Icon iconDefault={'awareness-ribbon'}/>
      </View>
      </View>
    );
  }

  renderAnimation = () => {
    const {barHolder, centerItem, centerAnimate, centerAnimateItem, menuHolder, keyboardHolder, animationGradient, wave1, textListinig} = styles;
    let {jump1, jump2} = this.state;
    return(
      <View>
        <Animated.View style={
          {
            top: jump2,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'green'
          }
        }>
        </Animated.View>
        <Animated.View style={
          {
            top: 30,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'red'
          }
        }>
        </Animated.View>
        <View style={animationGradient}>
        <View style={barHolder}>
          <View style={menuHolder}>
            <Icon iconDefault={'menu'}/>
          </View>
          <View style={keyboardHolder}>
            <Icon iconDefault={'keyboard'}/>
          </View>
        </View>
      </View>
      <View style={centerAnimate}>
        <View style={centerAnimateItem}>
          <Loading/>
          <LoadingText text={'Lisitnig'}/>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    height: 60,
    width: window.width,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  animationGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    height: 70,
    width: window.width,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  wave1: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red'
  },
  barHolder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  centerItem: {
    backgroundColor: '#42cef9',
    position: 'absolute',
    height: 70,
    width: 80,
    bottom: 0,
    left: (window.width / 2) - 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerAnimate: {
    backgroundColor: 'white',
    position: 'absolute',
    height: 100,
    width: 100,
    bottom: -20,
    left: (window.width / 2) - 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerAnimateItem: {
    height: 90,
    width: 90,
    borderRadius: 45,
    backgroundColor: '#42cef9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuHolder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#40bbf4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  keyboardHolder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#40bbf4',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SpeakingBar;
