import React from 'react';
import { Button, Block, Text, Input } from 'react-ui-kit-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Block column flex center middle>
        <Text size={18}>FORGOT PASSWORD</Text>
        <Input placeholder="Email" />
        <Button full rounded label="RESET PASSWORD" />
      </Block>
    );
  }
}
