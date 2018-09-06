import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import * as specs from '../../utils/constants';

class Input extends React.PureComponent {
  render() {
    const { style, placeholderTextColor, multiline, ...rest } = this.props;

    if (multiline) {
      return (
        <TextInput
          {...rest}
          multiline
          placeholderTextColor={placeholderTextColor}
          style={[styles.input, { height: 'auto' }, style]}
          underlineColorAndroid="transparent"
        />
      );
    }

    return (
      <TextInput
        {...rest}
        style={[styles.input, style]}
        placeholderTextColor={placeholderTextColor}
        underlineColorAndroid="transparent"
      />
    );
  }
}

Input.propTypes = {
  placeholderTextColor: PropTypes.string,
  multiline: PropTypes.bool,
  style: TextInput.propTypes.style,
};

Input.defaultProps = {
  placeholderTextColor: specs.PLACEHOLDER_COLOR,
  multiline: false,
  style: {},
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: specs.INPUT_BACKGROUND,
    borderRadius: specs.INPUT_RADIUS,
    color: specs.COLOR_WHITE,
    fontSize: specs.FONT_SIZE,
    height: specs.INPUT_HEIGHT,
    marginBottom: specs.MARGIN,
    marginTop: specs.MARGIN,
    paddingLeft: specs.PADDING,
    paddingRight: specs.PADDING,
    textDecorationColor: 'transparent',
    textShadowColor: 'transparent',
    width: specs.WIDTH * 0.8, // 80%
  },
});
