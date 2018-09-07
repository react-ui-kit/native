import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Block, Text, Input } from 'react-ui-kit-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Block column flex center middle style={styles.forgot}>
        <Text size={18}>FORGOT PASSWORD</Text>
        <Input placeholder="Email" />
        <Button full color="#FFF" title="RESET PASSWORD" style={{ marginTop: 7 }} />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  forgot: {
    paddingTop: 15,
    backgroundColor: '#FFFFFF',
  }
});
