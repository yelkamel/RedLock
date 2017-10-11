import React,{ Component } from 'react';
import { StatusBar,Image,StyleSheet,Text,View } from 'react-native';
import PropTypes from 'prop-types';
import PasswordGesture from 'react-native-gesture-password';


export default class EnterPassword extends Component{
  static propTypes = {
    password: PropTypes.string.isRequired,
    enterPassword: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      password: this.props.password,
      message: "Dévérouiller l'application avec votre mot de passe.",
      status: 'normal',
    };
  }

  onEnd(password) {
    if (password == this.state.password) {
      this.setState({
        status: 'right',
        message: 'Le mot de passe est correct.'
      });
      this.props.enterPassword();
    } else {
      this.setState({
        status: 'wrong',
        message: 'Le mot de pass est faux, recommencez.'
      });
    }
  }

  onStart() {
    this.setState({
      status: 'normal',
      message: "Dévérouiller l'application avec votre mot de passe.",
    });
  }
  
  render() {
    return (
      <PasswordGesture
        style = {styles.setPg}
        ref='pg'
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
        backgroundColor:"#012642",
    },
});

  