import React,{ Component } from 'react';
import { StatusBar,Image,StyleSheet,Text,View } from 'react-native';
import PropTypes from 'prop-types';
import { Metrics, Colors } from '../Themes';
import PasswordGesture from 'react-native-gesture-password';

export default class NewPassword extends Component{
  static propTypes = {
    password: PropTypes.string.isRequired,
    setPassword: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      password: this.props.password,
      message: 'Entrer un nouveau mot de passe.',
      status: 'normal',
    };
  }
  
  onEnd(password) {
    if ( this.state.password === '' ) {
      this.state.password = password;
      this.setState({
          status: 'normal',
          message: 'A nouveau utiliser avec le même mot de passe',
        });
    } else {
      if ( password === this.state.password ) {
        this.setState({
          status: 'right',
          message: 'votre mot de passe est enregisté',
        });
        this.props.setPassword(password);
      } else {
        this.setState({
          status: 'wrong',
          message:  "Ce n'est pas le même shéma, recommencez.",
        });
      }
    }
  }

  onStart() {
    if ( this.state.password === '') {
      this.setState({
        message: 'Entrer un nouveau mot de passe.',
      });
    } else {
      this.setState({
        message: 'A nouveau utiliser avec le même mot de passe',
      });
    }
  }
  
  render() {
    return (
      <PasswordGesture
        style = {styles.setPg}
        normalColor={Colors.basicLock}
        status={this.state.status}
        message={this.state.message}
        allowCross={true}
        onStart={() => this.onStart()}
        onEnd={(password) => this.onEnd(password)}
      />
    );
  }
}


const styles = StyleSheet.create({
  setPg:{
    backgroundColor: 'transparent',
  },
});
  