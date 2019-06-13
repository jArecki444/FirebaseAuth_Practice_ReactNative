import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import {
  Button, Card, CardItem, Input
} from './common';

// eslint-disable-next-line react/prefer-stateless-function
class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '' });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed' });
          });
      });
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardItem>
        <CardItem>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardItem>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardItem>
          <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

export default LoginForm;
