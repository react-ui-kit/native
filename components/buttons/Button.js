import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import * as specs from '../../utils/constants';

class Button extends React.Component {
  renderContent = () => {
    const { color, label, title, basic, inverted, size, bold, icon, textStyle } = this.props;
    const text = label || title || null;
    const textStyles = [
      basic ? styles.basicText : null,
      bold ? { fontWeight: 'bold' } : null,
      color ? { color } : { color: specs.COLOR_WHITE },
      inverted ? styles.basicText : null,
      size ? { fontSize: size } : { fontSize: specs.BUTTON_FONT_SIZE },
    ];

    if (icon && !text) return icon;

    return <Text style={textStyles}>{text}</Text>;
  };

  render() {
    const { disabled, basic, inverted, border, full, style, ...props } = this.props;

    const buttonStyle = [
      styles.button,
      basic ? styles.basic : null,
      inverted ? styles.inverted : null,
      border ? styles.border : null,
      full ? styles.full : null,
      disabled ? styles.disabled : null,
      style,
    ];

    return (
      <TouchableOpacity {...props} disabled={disabled} style={buttonStyle}>
        {this.renderContent()}
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  basic: PropTypes.bool,
  bold: PropTypes.bool,
  border: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  full: PropTypes.bool,
  icon: PropTypes.bool,
  inverted: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.number,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
  title: PropTypes.string,
};

Button.defaultProps = {
  basic: false,
  bold: false,
  border: false,
  disabled: false,
  color: specs.COLOR_WHITE,
  full: false,
  icon: false,
  inverted: false,
  label: false,
  size: 0,
  style: {},
  title: false,
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: specs.BUTTON_BACKGROUND,
    borderRadius: specs.BUTTON_RADIUS,
    height: specs.BUTTON_HEIGHT,
    justifyContent: 'center',
    padding: specs.BUTTON_PADDING,
    width: specs.WIDTH * 0.5, // 50%
  },
  basic: {
    backgroundColor: 'transparent',
    padding: 0,
    width: 'auto',
  },
  inverted: {
    backgroundColor: specs.COLOR_WHITE,
    borderColor: specs.COLOR_PRIMARY,
    borderWidth: 0.5,
  },
  border: {
    borderColor: specs.COLOR_PRIMARY,
    borderWidth: 0.5,
  },
  disabled: {
    backgroundColor: specs.BUTTON_DISABLED,
  },
  full: {
    width: specs.WIDTH * 0.8, // 80%
  },
  basicText: {
    color: specs.COLOR_PRIMARY,
  },
});
