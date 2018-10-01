import React from 'react';
import { Block, Button, Input, Text } from 'react-ui-kit-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Block flex middle>
        <Text title light color="#000">
          LOGIN SCREEN
        </Text>
        <Text caption thin color="#000">
          Please login to your account
        </Text>
        <Input placeholder="Email" />
        <Input password placeholder="Password" />
        <Button full primary rounded label="SIGN IN" />
      </Block>
    );
  }
}
