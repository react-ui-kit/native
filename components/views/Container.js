import React from 'react';
// eslint-disable-next-line
import { StyleSheet, View, KeyboardAvoidingView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

StatusBar.setBarStyle('light-content', false);

class Container extends React.PureComponent {
  render() {
    const { keyboard, style, children, ...props } = this.props;

    if (keyboard) {
      return (
        <KeyboardAvoidingView
          {...props}
          behavior="padding"
          style={[styles.container, style]}
          contentContainerStyle={[styles.container, style]}>
          {children}
        </KeyboardAvoidingView>
      );
    }

    return (
      <View style={[styles.container, style]} {...props}>
        {children}
      </View>
    );
  }
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  keyboard: PropTypes.bool,
  style: View.propTypes.style,
};

Container.defaultProps = {
  children: undefined,
  keyboard: false,
  style: {},
};

export default Container;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
