import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBEv_x03CYsH-8HJlzP4q-_CXXt8lpY_HE',
      authDomain: 'authdsafgdsfgfsdg.firebaseapp.com',
      databaseURL: 'https://authdsafgdsfgfsdg.firebaseio.com',
      projectId: 'authdsafgdsfgfsdg',
      storageBucket: 'authdsafgdsfgfsdg.appspot.com',
      messagingSenderId: '891424480028',
      appId: '1:891424480028:web:195f9ec5d1108fcd'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
