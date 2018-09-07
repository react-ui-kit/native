import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Block, Text, Input } from 'react-ui-kit-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Block column flex center middle style={styles.login}>
        <Text size={18}>LOGIN SCREEN</Text>
        <Input placeholder="Email" />
        <Input secureTextEntry placeholder="Password" />
        <Button full color="#FFF" title="SIGN IN" style={{ marginTop: 7 }} />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    paddingTop: 15,
    backgroundColor: '#FFFFFF',
  }
});
