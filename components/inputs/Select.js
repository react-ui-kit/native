import React from 'react';
import { Text, StyleSheet } from 'react-native';
// eslint-disable-next-line
import Dropdown from 'react-native-modal-dropdown';

import * as specs from '../../utils/constants';

class Select extends React.PureComponent {
  render() {
    const { style, textStyle, dropdownStyle, dropdownTextStyle } = this.props;
    return (
      <Dropdown
        {...this.props}
        style={[styles.select, style]}
        textStyle={[styles.text, textStyle]}
        dropdownStyle={[styles.dropdown, dropdownStyle]}
        dropdownTextStyle={[styles.dropdownText, dropdownTextStyle]}
      />
    );
  }
}

Select.propTypes = {
  dropdownStyle: Text.propTypes.style,
  dropdownTextStyle: Text.propTypes.style,
  style: Text.propTypes.style,
  textStyle: Text.propTypes.style,
};

Select.defaultProps = {
  dropdownStyle: {},
  dropdownTextStyle: {},
  style: {},
  textStyle: {},
};

export default Select;

export const styles = StyleSheet.create({
  select: {
    backgroundColor: specs.INPUT_BACKGROUND,
    borderRadius: specs.INPUT_RADIUS,
    height: specs.INPUT_HEIGHT,
    marginBottom: specs.MARGIN,
    marginTop: specs.MARGIN,
    width: specs.WIDTH * 0.8, // 80%
  },
  dropdown: {
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
  },
});
