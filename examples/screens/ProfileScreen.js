import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Block, Text } from 'react-ui-kit-native';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { profile } = this.props;

    return (
      <Block fluid flex middle style={styles.profile}>
        <Text h5 light color="#000">{profile.fullname}</Text>
        <Image source={{ uri: profile.avatar }} style={styles.avatar} />
        <Text subtitle light>{`${profile.city}, ${profile.country}`}</Text>
        <Text bold>{profile.email}</Text>
      </Block>
    );
  }
}

ProfileScreen.defaultProps = {
  profile: {
    fullname: `React UI Kit`,
    street: `Same same 32`,
    city: `London`,
    state: `Great London`,
    country: `United Kingdom`,
    age: 32,
    email: `contact@react-ui-kit.com`,
    mobile: `0755000000`,
    score: 2593,
    avatar: `https://react-ui-kit.com/assets/img/react-ui-kit-logo.png`,
  },
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profile: {
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
