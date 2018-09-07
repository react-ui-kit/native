import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default class CameraScreen extends React.Component {
  static navigationOptions = {
    title: 'Camera',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Camera</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
