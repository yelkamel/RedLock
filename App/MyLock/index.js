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
    };
  }

  setPassword = (password) => {
    this.setState({
      password: password,
      hasSet: true,
    })
  }

  enterPassword = () => {
    this.props.setEnterApp()
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return(
      <View style={{flex:1}}>
        {!this.state.hasSet && 
          <NewPassword setPassword={this.setPassword} password={this.state.password}/>
        }
        {(this.state.hasSet&&!this.state.enterApp) &&
          <EnterPassword enterPassword={this.enterPassword} password={this.state.password}/>
        }
      </View>
    )
  }
}
