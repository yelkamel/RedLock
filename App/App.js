import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import MyLock from './MyLock'
import SortableBox from './SortableBox'
import { Metrics, Colors } from './Themes';


/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
{instructions}
*/


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      enterApp: false,
    };
  }

  enterApp = () => {
    this.setState({
      enterApp: true
    })
  }

  exitApp = () => {
    this.setState({
      enterApp: false
    })
  }

  render() {

    if (!this.state.enterApp)
      return (
        <View style={styles.lockContainer}>
          <MyLock setEnterApp={this.enterApp}/>
        </View>
      );

    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <SortableBox/>
        </View>
        <TouchableHighlight style={styles.backButton} onPress={this.exitApp}>
          <Text> Retour </Text>
        </TouchableHighlight>
      </View>)
  }
}

const styles = StyleSheet.create({
  lockContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  backButton: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: Metrics.screenWidth / 3,
    backgroundColor: Colors.button,
    borderRadius: 5,
  }
});
