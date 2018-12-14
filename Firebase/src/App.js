import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false }

componentWillMount() {
  firebase.initializeApp({
    apiKey: 'AIzaSyAMDmNeGritDcjeN2ds7p7ps1JSeEDGaXY',
    authDomain: 'authentication-f74a0.firebaseapp.com',
    databaseURL: 'https://authentication-f74a0.firebaseio.com',
    projectId: 'authentication-f74a0',
    storageBucket: 'authentication-f74a0.appspot.com',
    messagingSenderId: '1788554547'
  });

  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
  });
}

rednerContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <Button onPress={() => firebase.auth().signOut()}>
        Log Out
        </Button>
      );
    case false:
      return <LoginForm />;
    default:
      return <Spinner size="large" />;
  }
}

  render() {
    return (
      <View>
        <Header headerText="Authentication!!" />
        {this.rednerContent()}
      </View>
    );
  }
}

export default App;
