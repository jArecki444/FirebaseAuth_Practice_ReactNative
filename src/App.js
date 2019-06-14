import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {
  Header, Spinner, Button, CardItem
} from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {
  state = { loggedIn: null };

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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardItem>
            <Button onPress={() => firebase.auth().signOut()}> Log out!</Button>
          </CardItem>
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
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
