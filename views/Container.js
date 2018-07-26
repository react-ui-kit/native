import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, StatusBar } from 'react-native';

StatusBar.setBarStyle('light-content', false);

class Container extends React.Component {
  render() {
    const { keyboard, style, ...props } = this.props;

    if (keyboard) {
      return (
        <KeyboardAvoidingView
          {...props}
          behavior="padding"
          style={[styles.container, style]}
          contentContainerStyle={[styles.container, style]}>
          {this.props.children}
        </KeyboardAvoidingView>
      )
    }

    return (
      <View style={[styles.container, style]} {...props}>
        {this.props.children}
      </View>
    );
  }
}

Block.defaultProps = {
  keyboard: false,
  style: {}
}

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
