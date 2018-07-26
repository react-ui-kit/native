import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Dropdown from 'react-native-modal-dropdown';

import specs from '../constants';

class Select extends React.Component {
  render() {
    return (
      <Dropdown
        {...this.props}
        style={[styles.select, this.props.style]}
        textStyle={[styles.text, this.props.textStyle]}
        dropdownStyle={[styles.dropdown, this.props.dropdownStyle]}
        dropdownTextStyle={[styles.dropdownText, this.props.dropdownTextStyle]} />
    );
  }
}

export default Select;

const styles = StyleSheet.create({
  select: {
    backgroundColor: specs.INPUT_BACKGROUND,
    borderRadius: specs.INPUT_RADIUS,
    height: specs.INPUT_HEIGHT,
    marginBottom: specs.MARGIN,
    marginTop: specs.MARGIN,
    width: specs.WIDTH * 0.8, // 80%
  },
  dropdown: {
    height: `auto`,
    marginTop: specs.MARGIN,
    width: specs.WIDTH * 0.8,
  },
  dropdownText: {
    backgroundColor: specs.COLOR_TERTIARY,
    fontSize: specs.FONT_SIZE,
    paddingLeft: specs.PADDING,
    paddingRight: specs.PADDING,
    width: specs.WIDTH * 0.8,
  },
  text: {
    color: specs.COLOR_SECONDARY,
    fontSize: specs.FONT_SIZE,
    lineHeight: specs.INPUT_HEIGHT,
    paddingLeft: specs.PADDING,
    paddingRight: specs.PADDING,
    width: specs.WIDTH * 0.8,
  }
});