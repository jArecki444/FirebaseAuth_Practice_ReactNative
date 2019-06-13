import React, { Component } from 'react';
import {
  Button, Card, CardItem, Input
} from './common';

// eslint-disable-next-line react/prefer-stateless-function
class LoginForm extends Component {
  state = { email: '', password: '' };

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
        <CardItem>
          <Button>Log in</Button>
        </CardItem>
      </Card>
    );
  }
}

// styles = Stylesheet.create({

// })

export default LoginForm;
