import React from 'react';
import { Block, Button, Input, Text } from 'react-ui-kit-native';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Block fluid flex middle>
        <Text title light color="#000">
          REGISTER SCREEN
        </Text>
        <Input label="First name" placeholder="React" right icon="text" family="Entypo" />
        <Input label="Last name" placeholder="UI Kit" right icon="text" family="Entypo" />
        <Input
          right
          icon="location-pin"
          family="Entypo"
          label="Address"
          placeholder="Street name, number, house"
        />
        <Input
          right
          icon="phone"
          family="Entypo"
          type="phone-pad"
          label="Phone number"
          placeholder="0712345678"
        />
        <Button full rounded tertiary label="SIGN UP" />
      </Block>
    );
  }
}