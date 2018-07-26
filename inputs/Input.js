import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import specs from '../constants';

class Input extends React.Component {
  render() {
    const { style, placeholderTextColor, ...rest } = this.props;

    if (this.props.multiline) {
      return (
        <TextInput
          {...rest}
          multiline={true}
          placeholderTextColor={placeholderTextColor}
          style={[styles.input, {height: `auto`}, style]}
          underlineColorAndroid='transparent' />
      )
    }

    return (
      <TextInput
        {...rest}
        style={[styles.input, style]}
        placeholderTextColor={placeholderTextColor}
        underlineColorAndroid='transparent' />
    );
  }
}

Input.defaultProps = {
  placeholderTextColor: specs.PLACEHOLDER_COLOR,
  style: {}
}

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: specs.INPUT_BACKGROUND,
    borderRadius: specs.INPUT_RADIUS,
    color: specs.COLOR_WHITE,
    fontFamily: specs.FONT_NAME,
    fontSize: specs.FONT_SIZE,
    height: specs.INPUT_HEIGHT,
    marginBottom: specs.MARGIN,
    marginTop: specs.MARGIN,
    paddingLeft: specs.PADDING,
    paddingRight: specs.PADDING,
    textDecorationColor: `transparent`,
    textShadowColor: `transparent`,
    width: specs.WIDTH * 0.8, // 80%
  }
});