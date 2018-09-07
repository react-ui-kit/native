import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Block, Text, Input } from 'react-ui-kit-native';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Block column flex center middle style={styles.register}>
        <Text size={18}>REGISTER SCREEN</Text>
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
        <Input placeholder="Address" />
        <Input placeholder="Country" />
        <Button full color="#FFF" title="SIGN UP" style={{ marginTop: 7 }} />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  register: {
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
