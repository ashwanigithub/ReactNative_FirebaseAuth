import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

componentWillMount() {
  firebase.initializeApp({
    apiKey: 'AIzaSyAMDmNeGritDcjeN2ds7p7ps1JSeEDGaXY',
    authDomain: 'authentication-f74a0.firebaseapp.com',
    databaseURL: 'https://authentication-f74a0.firebaseio.com',
    projectId: 'authentication-f74a0',
    storageBucket: 'authentication-f74a0.appspot.com',
    messagingSenderId: '1788554547'
  });
}

  render() {
    return (
      <View>
        <Header headerText="Firebase Authentication!!" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
