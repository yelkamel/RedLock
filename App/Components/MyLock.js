import React,{ Component } from 'react';
import { StatusBar,Image,StyleSheet,Text,View } from 'react-native';
import PropTypes from 'prop-types';
import { Metrics } from '../Themes';
import PasswordGesture from 'react-native-gesture-password';
import EnterPassword from './EnterPassword';
import NewPassword from './NewPassword';

export default class MyLock extends Component{
    constructor() {
    super();
    this.state = {
      password: '',
      hasSet: false,
      enterApp: false,
    };
  }

  setPassword = (password) => {
    this.setState({
      password: password,
      hasSet: true,
    })
  }

  enterPassword = () => {
    this.setState({
      enterApp: true,
    });
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return(
      <View style={styles.container}>
        {!this.state.hasSet && 
          <NewPassword setPassword={this.setPassword} password={this.state.password}/>
        }
        {(this.state.hasSet&&!this.state.enterApp) &&
          <EnterPassword enterPassword={this.enterPassword} password={this.state.password}/>
        }
        {this.state.enterApp && 
          <View style={styles.app}><Text style={styles.appText}>Entrer réussi</Text></View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"transparent",
    flex: 1,
  },
  setPg:{
    backgroundColor:"#012642",
  },
  app:{
    backgroundColor:"#012642",
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
    alignItems:"center",
    justifyContent:"center",
  },
  appText:{
    color:"#fff",
    fontSize:25,
  }
});

